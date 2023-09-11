<script lang="ts" setup>
import { register } from "vue-advanced-chat";
import { useMessageStore } from "../stores/chat";
import { useUserStroe } from "../stores/user";
import ButtonComponent from "../components/common/ButtonComponent.vue";
import { useSocket } from "../composables/useVueSocketIoClient";
import ChatComponent from "../components/chat/ChatComponent.vue";
import { RoomType } from "../../types/chat";

register();
const messageStore = useMessageStore();
const userStore = useUserStroe();
const { sendData, socketResponse, isConnected } = useSocket({
  room: "2222",
  userId: userStore.getProfile?.userId,
  token: userStore.getToken,
});

const test = () => {
  sendData({ content: "jfoiewjfoiewjfewoijfoi" });
};

const onFetchRoom = async (event: CustomEvent) => {
  await messageStore.updateMessages(event.detail[0].room.roomId);
};
</script>

<template>
  <!--  <button-component @click="test" title="test" />-->
  <div class="chat">
    <chat-component :list="messageStore.getRooms" />
  </div>
</template>

<style lang="scss">
@import "@/style/chat";
</style>
