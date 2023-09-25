<script lang="ts" setup>
import { ChatMessageType, RoomType } from "../../../types/chat";
import SvgArrowDown from "../../assets/svg/SvgArrowDown.vue";
import SvgAdd from "../../assets/svg/chat/SvgAdd.vue";
import InputFieldComponent from "../common/InputFieldComponent.vue";
import { Ref, ref } from "vue";
import SvgMicrophone from "../../assets/svg/chat/SvgMicrophone.vue";
import SvgSend from "../../assets/svg/chat/SvgSend.vue";
import ChatMessageItemComponent from "./ChatMessageItemComponent.vue";
import UserImage from "../common/UserImage.vue";

defineProps({
  messagesList: {
    type: Array as () => ChatMessageType[],
    required: true,
  },
  room: {
    type: Object as () => RoomType,
    required: true,
  },
});
const emit = defineEmits(["backClick"]);
const messageModel: Ref<string> = ref("");

const onSend = () => {
  messageModel.value = "";
};
</script>

<template>
  <div class="chat-messages">
    <div class="chat-messages__header">
      <div
        class="chat-messages__header-back pointer"
        @click="emit('backClick')"
      >
        <svg-arrow-down />
      </div>
      <div class="chat-messages__header-avatar">
        <user-image :picture="room.roomImage" />
        <!--        <img :src="room.roomImage" :alt="room.roomName" />-->
      </div>
      <div class="chat-messages__header-name">
        {{ room.roomName }}
      </div>
    </div>
    <div class="chat-messages__content" v-if="messagesList?.length">
      <chat-message-item-component
        v-for="message in messagesList"
        :message="message"
        :key="`message-item-${message?.id}`"
      />
    </div>
    <div class="chat-messages__controllers">
      <div class="chat-messages__controllers-add pointer">
        <svg-add />
      </div>
      <div class="chat-messages__controllers-message">
        <input v-model="messageModel" placeholder="Write a message..." />
      </div>
      <div
        v-if="messageModel.length"
        class="chat-messages__controllers-send pointer"
        @send="onSend"
      >
        <svg-send />
      </div>
      <div v-else class="chat-messages__controllers-voice pointer">
        <svg-microphone />
      </div>
    </div>
  </div>
</template>
