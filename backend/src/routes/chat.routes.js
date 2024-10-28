import express from "express";
import {
  accessConversation,
  fetchChats,
  createGroupChat,
  renameGroup,
  addToGroup,
  removeFromGroup,
} from "../controllers/conversation.controller.js";
import { allMessages, sendMessage } from "../controllers/message.controller.js";
import { verifyJWT } from "../middleware/auth.middleware.js";

const router = express.Router();

// Conversation Routes
router.post("/chat", verifyJWT, accessConversation);
router.get("/chat", verifyJWT, fetchChats);
router.post("/chat/group", verifyJWT, createGroupChat);
router.put("/chat/rename", verifyJWT, renameGroup);
router.put("/chat/groupremove", verifyJWT, removeFromGroup);
router.put("/chat/groupadd", verifyJWT, addToGroup);

// Message Routes
router.get("/message/:chatId", verifyJWT, allMessages);
router.post("/message", verifyJWT, sendMessage);

export default router;
