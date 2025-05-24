import axios from "axios";

const api = axios.create({
  baseURL: "https://chat-appeva-production.up.railway.app", // backend Rails API
});



export const fetchChatrooms = () => api.get("/chatrooms");
export const fetchMessages = (chatroomId) =>
  api.get(`/chatrooms/${chatroomId}/messages`);
export const postMessage = (chatroomId, content) =>
  api.post(`/chatrooms/${chatroomId}/messages`, {
    message: { content, chatroom_id: chatroomId },
  });
export const createChatroom = (name) =>
  api.post("/chatrooms", { chatroom: { name } });




