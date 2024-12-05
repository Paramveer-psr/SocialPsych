import axios from "axios";
import {
  accessConversationRoute,
  fetchChatsRoute,
  createGroupChatRoute,
  renameGroupRoute,
  removeFromGroupRoute,
  addToGroupRoute,
  fetchMessagesRoute,
  sendMessageRoute,
} from "../ApiRoutes";

const fetchConversations = async () => {
  try {
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)accessToken\s*\=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
    const response = await axios.get(fetchChatsRoute, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching conversations:", error);
    throw error;
  }
};

export const fetchMessages = async (chatId) => {
  try {
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)accessToken\s*\=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
    const response = await axios.get(fetchMessagesRoute(chatId), {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching messages:", error);
    throw error;
  }
};

export const sendMessage = async (chatId, content) => {
  try {
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)accessToken\s*\=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
    const response = await axios.post(
      sendMessageRoute,
      { chatId, content },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error sending message:", error);
    throw error;
  }
};

export { fetchConversations };
