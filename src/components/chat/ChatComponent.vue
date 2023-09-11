<script lang="ts" setup>
import { RoomType } from "../../../types/chat";
import ChatRoomsComponent from "./ChatRoomsComponent.vue";
import ChatMessagesList from "./ChatMessagesList.vue";
import { useMessageStore } from "../../stores/chat";

defineProps({
  list: {
    type: Array as () => RoomType[],
    required: true,
  },
});

const chatStore = useMessageStore();

const onBackClick = () => {
  chatStore.currentRoomId = null;
};
</script>

<template>
  <div class="chat-component">
    <chat-rooms-component
      @chat-select="chatStore.onSelectRoom"
      :selected-room="chatStore.getCurrentRoomId"
      :list="list"
    />
    <chat-messages-list
      v-if="chatStore.getCurrentRoom"
      :room="chatStore.getCurrentRoom"
      :messages-list="chatStore.getCurrentRoomMessages"
      @back-click="onBackClick"
    />
  </div>
</template>

<style lang="scss">
@import "@/style/chat/chat-component";
</style>
