export enum MessageType {
  chat = "CHAT",
  voice = "VOICE",
  join = "JOIN",
  leave = "LEAVE",
}
export interface ChatMessageType {
  id: string;
  type: MessageType;
  content: string;
  date: string;
  status: boolean;
  sender: string;
  userId: string;
}

export interface RoomType {
  id: number;
  roomName: string;
  roomImage: null | string;
  roomLastMessage: string;
  roomLastMessageDate: string;
  messages: ChatMessageType[];
}
