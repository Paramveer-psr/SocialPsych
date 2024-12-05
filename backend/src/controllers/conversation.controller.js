import { User } from "../models/user.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { Conversation } from "../models/conversation.model.js";

//@description     Create or fetch One to One Chat
//@route           POST /api/chat/
//@access          Protected
const accessConversation = asyncHandler(async (req, res) => {
  const { userId } = req.body;
  if (!userId) {
    return res.status(400).send({ message: "Please Provide a User Id" });
  }
  var doesConversationExist = await Conversation.find({
    isGroupChat: false,
    $and: [
      { members: { $elemMatch: { $eq: req.user._id } } },
      { members: { $elemMatch: { $eq: userId } } },
    ],
  })
    .populate("members", "-password")
    .populate("latestMessage");

  doesConversationExist = await User.populate(doesConversationExist, {
    path: "latestMessage.sender",
    select: "name avatar email",
  });

  if (doesConversationExist.length > 0) {
    return res.status(200).send(doesConversationExist[0]);
  } else {
    var newConversation = await Conversation.create({
      members: [req.user._id, userId],
      isGroupChat: false,
      chatName: "Sender",
    });
    try {
      const fullConversation = await Conversation.findOne({
        _id: newConversation._id,
      }).populate("members", "-password");
      res.status(200).send(fullConversation);
    } catch (error) {
      res.status(400);
      throw new Error(error.message);
    }
  }
});

const fetchChats = asyncHandler(async (req, res) => {
  try {
    Conversation.find({ members: { $elemMatch: { $eq: req.user._id } } })
      .populate("members", "-password")
      .populate("groupAdmin", "-password")
      .populate("latestMessage")
      .sort({ updatedAt: -1 })
      .then(async (results) => {
        results = await User.populate(results, {
          path: "latestMessage.sender",
          select: "name avatar email",
        });
        res.status(200).send(results);
      });
  } catch (error) {
    res.status(400);
    throw new Error(error.message);
  }
});

const createGroupChat = asyncHandler(async (req, res) => {
  if (!req.body.users || !req.body.name) {
    return res.status(400).send({ message: "Please Fill all the fields" });
  }

  var users = JSON.parse(req.body.users);

  if (users.length < 2) {
    return res
      .status(400)
      .send("More than 2 users are required to form a group chat");
  }

  users.push(req.user);

  try {
    const groupChat = await Conversation.create({
      chatName: req.body.name,
      members: users,
      isGroupChat: true,
      groupAdmin: req.user,
    });

    const fullGroupChat = await Conversation.findOne({ _id: groupChat._id })
      .populate("members", "-password")
      .populate("groupAdmin", "-password");

    res.status(200).json(fullGroupChat);
  } catch (error) {
    res.status(400);
    throw new Error(error.message);
  }
});

const renameGroup = asyncHandler(async (req, res) => {
  const { chatId, chatName } = req.body;

  const updatedChat = await Conversation.findByIdAndUpdate(
    chatId,
    {
      chatName: chatName,
    },
    {
      new: true,
    }
  )
    .populate("members", "-password")
    .populate("groupAdmin", "-password");

  if (!updatedChat) {
    res.status(404);
    throw new Error("Chat Not Found");
  } else {
    res.json(updatedChat);
  }
});

const removeFromGroup = asyncHandler(async (req, res) => {
  const { chatId, userId } = req.body;

  // check if the requester is admin

  const removed = await Conversation.findByIdAndUpdate(
    chatId,
    {
      $pull: { members: userId },
    },
    {
      new: true,
    }
  )
    .populate("members", "-password")
    .populate("groupAdmin", "-password");

  if (!removed) {
    res.status(404);
    throw new Error("Chat Not Found");
  } else {
    res.json(removed);
  }
});

const addToGroup = asyncHandler(async (req, res) => {
  const { chatId, userId } = req.body;

  // check if the requester is admin

  const added = await Conversation.findByIdAndUpdate(
    chatId,
    {
      $push: { members: userId },
    },
    {
      new: true,
    }
  )
    .populate("members", "-password")
    .populate("groupAdmin", "-password");

  if (!added) {
    res.status(404);
    throw new Error("Chat Not Found");
  } else {
    res.json(added);
  }
});

export {
  accessConversation,
  fetchChats,
  createGroupChat,
  renameGroup,
  addToGroup,
  removeFromGroup,
};
