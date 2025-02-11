export const host = "http://localhost:8000";
export const signInRoute = `${host}/api/auth/sign-in`;
export const signUpRoute = `${host}/api/auth/sign-up`;
export const signOutRoute = `${host}/api/auth/sign-out`;
export const getFeedPosts = `${host}/api/posts/`;
export const createPostRoute = `${host}/api/posts/create`;
export const setProfileRoute = `${host}/api/auth/set-profile`;
export const getUserPosts = `${host}/api/posts/user`;
export const getUsersRoute = `${host}/api/auth/users`;

// Conversation Routes
export const accessConversationRoute = `${host}/api/chat`;
export const fetchChatsRoute = `${host}/api/chat`;
export const createGroupChatRoute = `${host}/api/chat/group`;
export const renameGroupRoute = `${host}/api/chat/rename`;
export const removeFromGroupRoute = `${host}/api/chat/groupremove`;
export const addToGroupRoute = `${host}/api/chat/groupadd`;

// Message Routes
export const fetchMessagesRoute = (chatId) =>
  `${host}/api/chat/message/${chatId}`;
export const sendMessageRoute = `${host}/api/chat/message`;
