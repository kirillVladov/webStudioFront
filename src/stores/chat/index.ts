import { defineStore, StateTree } from "pinia";
import api from "../../services/api/api";
import { MessageType, RoomType } from "../../../types/chat";

interface State extends StateTree {
  // usersList: [];
  // messagesList: [];
  unreadCount: number;
  currentUserId: number;
  currentRoomId: number | null;
  rooms: RoomType[];
}

export const useMessageStore = defineStore("message-store", {
  state: (): State => ({
    rooms: [
      {
        id: 0,
        roomName: "test",
        roomImage: null,
        roomLastMessage: "Hi, u faggot man",
        roomLastMessageDate: "sat",
        messages: [],
      },
      {
        id: 1,
        roomName: "test",
        roomImage:
          "https://ic.pics.livejournal.com/shadberry_game/69190420/203256/203256_900.jpg",
        roomLastMessage: "I fuck u mom",
        roomLastMessageDate: "21-09-23",
        messages: [
          {
            id: "dijewoidjwe",
            type: MessageType.chat,
            content: "test message",
            date: "21-09-23",
            status: true,
            sender: "ladislav",
            userId: "64fa22f4bef8df3b04d71d64",
          },
          {
            id: "dijewoidjwe",
            type: MessageType.chat,
            content: "test message",
            date: "21-09-23",
            status: true,
            sender: "ladislav",
            userId: "64fa22f4bef8df3b04d71d64",
          },
          {
            id: "dijewoidjwe",
            type: MessageType.chat,
            content: "test message",
            date: "21-09-23",
            status: true,
            sender: "ladislav",
            userId: "",
          },
          {
            id: "dijewoidjwe",
            type: MessageType.chat,
            content: "test message",
            date: "21-09-23",
            status: true,
            sender: "ladislav",
            userId: "64fa22f4bef8df3b04d71d64",
          },
          {
            id: "dijewoidjwe",
            type: MessageType.chat,
            content: "test message",
            date: "21-09-23",
            status: true,
            sender: "ladislav",
            userId: "",
          },
          {
            id: "dijewoidjwe",
            type: MessageType.chat,
            content: "test message",
            date: "21-09-23",
            status: true,
            sender: "ladislav",
            userId: "64fa22f4bef8df3b04d71d64",
          },
        ],
      },
      {
        id: 3,
        roomName: "test",
        roomImage: null,
        roomLastMessage: "",
        roomLastMessageDate: "sun",
        messages: [],
      },
      {
        id: 5,
        roomName: "test",
        roomImage:
          "https://ic.pics.livejournal.com/shadberry_game/69190420/203256/203256_900.jpg",
        roomLastMessage: "",
        roomLastMessageDate: "now",
        messages: [],
      },
      {
        id: 6,
        roomName: "test",
        roomImage: null,
        roomLastMessage: "Hi, u faggot man",
        roomLastMessageDate: "",
        messages: [],
      },
      {
        id: 7,
        roomName: "test",
        roomImage:
          "https://ic.pics.livejournal.com/shadberry_game/69190420/203256/203256_900.jpg",
        roomLastMessage: "I fuck u mom",
        roomLastMessageDate: "",
        messages: [],
      },
      {
        id: 8,
        roomName: "test",
        roomImage: null,
        roomLastMessage: "",
        roomLastMessageDate: "",
        messages: [],
      },
      {
        id: 9,
        roomName: "test",
        roomImage:
          "https://ic.pics.livejournal.com/shadberry_game/69190420/203256/203256_900.jpg",
        roomLastMessage: "",
        roomLastMessageDate: "",
        messages: [],
      },
      {
        id: 10,
        roomName: "test",
        roomImage: null,
        roomLastMessage: "Hi, u faggot man",
        roomLastMessageDate: "",
        messages: [],
      },
      {
        id: 11,
        roomName: "test",
        roomImage:
          "https://ic.pics.livejournal.com/shadberry_game/69190420/203256/203256_900.jpg",
        roomLastMessage: "I fuck u mom",
        roomLastMessageDate: "",
        messages: [],
      },
      {
        id: 12,
        roomName: "test",
        roomImage: null,
        roomLastMessage: "",
        roomLastMessageDate: "",
        messages: [],
      },
      {
        id: 13,
        roomName: "test",
        roomImage:
          "https://ic.pics.livejournal.com/shadberry_game/69190420/203256/203256_900.jpg",
        roomLastMessage: "",
        roomLastMessageDate: "",
        messages: [],
      },
      {
        id: 14,
        roomName: "test",
        roomImage: null,
        roomLastMessage: "Hi, u faggot man",
        roomLastMessageDate: "",
        messages: [],
      },
      {
        id: 15,
        roomName: "test",
        roomImage:
          "https://ic.pics.livejournal.com/shadberry_game/69190420/203256/203256_900.jpg",
        roomLastMessage: "I fuck u mom",
        roomLastMessageDate: "",
        messages: [],
      },
      {
        id: 16,
        roomName: "test",
        roomImage: null,
        roomLastMessage: "",
        roomLastMessageDate: "",
        messages: [],
      },
      {
        id: 17,
        roomName: "test",
        roomImage:
          "https://ic.pics.livejournal.com/shadberry_game/69190420/203256/203256_900.jpg",
        roomLastMessage: "",
        roomLastMessageDate: "",
        messages: [],
      },
      {
        id: 18,
        roomName: "test",
        roomImage: null,
        roomLastMessage: "Hi, u faggot man",
        roomLastMessageDate: "",
        messages: [],
      },
      {
        id: 19,
        roomName: "test",
        roomImage:
          "https://ic.pics.livejournal.com/shadberry_game/69190420/203256/203256_900.jpg",
        roomLastMessage: "I fuck u mom",
        roomLastMessageDate: "",
        messages: [],
      },
      {
        id: 20,
        roomName: "test",
        roomImage: null,
        roomLastMessage: "",
        roomLastMessageDate: "",
        messages: [],
      },
      {
        id: 21,
        roomName: "test",
        roomImage:
          "https://ic.pics.livejournal.com/shadberry_game/69190420/203256/203256_900.jpg",
        roomLastMessage: "",
        roomLastMessageDate: "",
        messages: [],
      },
      {
        id: 22,
        roomName: "test",
        roomImage: null,
        roomLastMessage: "Hi, u faggot man",
        roomLastMessageDate: "",
        messages: [],
      },
      {
        id: 23,
        roomName: "test",
        roomImage:
          "https://ic.pics.livejournal.com/shadberry_game/69190420/203256/203256_900.jpg",
        roomLastMessage: "I fuck u mom",
        roomLastMessageDate: "",
        messages: [],
      },
      {
        id: 24,
        roomName: "test",
        roomImage: null,
        roomLastMessage: "",
        roomLastMessageDate: "",
        messages: [],
      },
      {
        id: 25,
        roomName: "test",
        roomImage:
          "https://ic.pics.livejournal.com/shadberry_game/69190420/203256/203256_900.jpg",
        roomLastMessage: "",
        roomLastMessageDate: "",
        messages: [],
      },
    ],
    unreadCount: 0,
    currentUserId: 0,
    currentRoomId: null,
  }),
  actions: {
    async init() {
      // await Promise.all([
      //   this.updateUsers(),
      //   this.updateMessages(this.usersList?.length ? this.usersList[0]?.id : 0),
      // ]);
    },
    async onSelectRoom(id: number) {
      this.currentRoomId = id;
    },
    async updateUsers(): Promise<void> {
      const response = await api.updateChatUsers();

      this.usersList = response;
    },
    async updateMessages(userId: string): Promise<void> {
      const response = await api.updateMessages(userId);

      this.messagesList = response;
    },
    async sendMessage(userId: string): Promise<void> {
      // const response = await api.updateMessages(userId);
      //
      // this.messagesList = response;
    },
    async updateUnreadCount(userId: string): Promise<void> {
      const response = await api.getUnreadCoun(userId);

      this.messagesList = response?.count ?? 0;
    },
  },
  getters: {
    getCurrentRoom: (state) =>
      state.rooms.find(({ id }) => id === state.currentRoomId) ?? null,
    getRooms: (state) => state.rooms,
    getCurrentRoomMessages: (state) => state.getCurrentRoom?.messages ?? [],
    getUsersList: (state) => state.usersList,
    getUnreadCount: (state): number => state.unreadCount,
    getCurrentUserId: (state): number => state.currentUserId,
    getCurrentRoomId: (state): number => state.currentRoomId,
  },
});
