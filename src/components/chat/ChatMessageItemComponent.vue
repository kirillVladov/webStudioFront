<script lang="ts" setup>
import { ChatMessageType } from "../../../types/chat";
import { useUserStroe } from "../../stores/user";

defineProps({
  message: {
    type: Object as () => ChatMessageType,
    required: true,
  },
});
const userStore = useUserStroe();
</script>

<template>
  <div class="chat-message-item__wrapper">
    <div
      class="chat-message-item"
      :class="{ owner: message.userId === userStore.getProfile?.userId }"
    >
      <div class="chat-message-item__username">
        {{ message.sender }}
      </div>
      <div class="chat-message-item__username" v-if="false">
        <img src="" />
      </div>
      <div class="chat-message-item__text">
        {{ message.content }}
      </div>
    </div>
  </div>
</template>
