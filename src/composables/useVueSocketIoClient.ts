import * as io from "socket.io-client";
import { onMounted, onUnmounted, ref } from "vue";

export const useSocket = ({ room, userId, token }) => {
  const socket = ref();
  const SOCKET_BASE_URL = import.meta.env.VITE_SOCKET_URL;
  let s = io(SOCKET_BASE_URL, {
    reconnection: false,
    query: {
      userId,
      room,
      token,
    },
  });
  const socketResponse = ref({
    room: "",
    content: "",
    username: "",
    messageType: "",
    createdDateTime: "",
  });
  const isConnected = ref(false);
  const sendData = (payload) => {
    return socket.value.emit("send_message", {
      room,
      userId,
      token,
      content: payload.content,
      messageType: "CLIENT",
    });
  };
  onMounted(() => {
    s = io(SOCKET_BASE_URL, {
      reconnection: false,
      query: {
        userId,
        room,
        token,
      },
    });
    socket.value = s;
    s.on("connect", () => (isConnected.value = true));
    s.on("read_message", (res) => {
      socketResponse.value = {
        room: res.room,
        content: res.content,
        username: res.username,
        messageType: res.messageType,
        createdDateTime: res.createdDateTime,
      };
    });
  });

  onUnmounted(() => {
    s.disconnect();
  });

  return { socketResponse, isConnected, sendData };
};
