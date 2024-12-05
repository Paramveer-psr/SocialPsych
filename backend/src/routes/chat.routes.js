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
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = express.Router();

// Conversation Routes
router.post("/", verifyJWT, accessConversation);
router.get("/", verifyJWT, fetchChats);
router.post("/group", verifyJWT, createGroupChat);
router.put("/rename", verifyJWT, renameGroup);
router.put("/groupremove", verifyJWT, removeFromGroup);
router.put("/groupadd", verifyJWT, addToGroup);

// Message Routes
router.get("/message/:chatId", verifyJWT, allMessages);
router.post("/message", verifyJWT, sendMessage);

export default router;
