import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import Post from "../models/post.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { Comment } from "../models/comment.model.js";

const createPost = asyncHandler(async (req, res) => {
  const { caption } = req.body;
  const mediaPath = req.file?.path; // Use req.file instead of req.files

  if (!mediaPath) {
    throw new ApiError(400, "Image not Uploaded");
  }

  const media = await uploadOnCloudinary(mediaPath, process.env.API_KEY);
  const mediaUrl = media.secure_url;

  const newPost = await Post.create({
    caption,
    media: mediaUrl,
    user: req.user._id,
    likes: [],
    comments: [],
  });

  return res
    .status(200)
    .json(new ApiResponse(200, "Post Created Successfully", newPost));
});

const getPosts = asyncHandler(async (req, res) => {
  const posts = await Post.find()
    .populate("user", "username")
    .populate("comments.user", "username")
    .sort({ createdAt: -1 });

  return res
    .status(200)
    .json(new ApiResponse(200, "Posts Fetched Successfully", posts));
});

const likePost = asyncHandler(async (req, res) => {
  const { postId } = req.params;
  const post = await Post.findById(postId);
  if (!post) {
    throw new ApiError(404, "Post not found");
  }
  if (post.likes.includes(req.user._id)) {
    post.likes.pull(req.user._id);
  } else {
    post.likes.push(req.user._id);
  }
  await post.save();

  return res
    .status(200)
    .json(new ApiResponse(200, "Post Liked Successfully", post));
});

const commentOnPost = asyncHandler(async (req, res) => {
  const { postId } = req.params;
  const { content } = req.body;
  if (!content) {
    throw new ApiError(400, "Comment cannot be empty");
  }
  const post = await Post.findById(postId);
  if (!post) {
    throw new ApiError(404, "Post not found");
  }
  const newComment = new Comment({
    content,
    user: req.user._id,
    post: postId,
  });
  post.comments.push(newComment);
  await newComment.save();
  await post.save();

  return res
    .status(200)
    .json(new ApiResponse(200, "Comment Added Successfully", newComment));
});

export { createPost, getPosts, likePost, commentOnPost };
