import $http from "../http";
import { ChatMessageType } from "../../../../types/chat";

const base = "chat";
const socketApi = import.meta.env.VITE_SOCKET_URL;
export function updateChatUsers() {
  return $http.get(`${base}/users`);
}

export function updateMessages(userId: string) {
  return $http.get(`${base}/messages`, { params: { userId } });
}

export function connectToChat(data: ChatMessageType): Promise<ChatMessageType> {
  return $http.get(`/topic/public`, { type: data.type });
}

export function getUnreadCoun(userId: string): Promise<{ count: number }> {
  return $http.get(`${base}/get-unread-count`, { params: { userId } });
}
