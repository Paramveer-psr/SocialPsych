import mongoose, { Schema } from "mongoose";
import { User } from "./user.model.js";
import { Message } from "./message.model.js";

const conversationSchema = new Schema(
  {
    chatName: {
      type: String,
      trim: true,
    },
    members: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: User,
      },
    ],
    latestMessage: {
      type: mongoose.Schema.Types.ObjectId,
      ref: Message,
    },
    isGroupChat: {
      type: Boolean,
      default: false,
    },
    groupAdmin: {
      type: mongoose.Schema.Types.ObjectId,
      ref: User,
    },
  },
  { timestamps: true }
);

export const Conversation = mongoose.model("Conversation", conversationSchema);
