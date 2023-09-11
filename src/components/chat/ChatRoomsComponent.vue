<script lang="ts" setup>
import { RoomType } from "../../../types/chat";
import InputFieldComponent from "../common/InputFieldComponent.vue";
import { Ref, ref } from "vue";
import SvgAdd from "../../assets/svg/chat/SvgAdd.vue";
import UserImage from "../common/UserImage.vue";
import SvgRead from "../../assets/svg/chat/SvgRead.vue";

defineProps({
  list: {
    type: Array as () => RoomType[],
    required: true,
  },
  selectedRoom: {
    type: Number,
    default: null,
  },
});
const emit = defineEmits(["chatSelect", "searchChat", "addRoom"]);
const inputModel: Ref<string> = ref("");
const isSearchMode: Ref<boolean> = ref(false);

const onSearchMode = (state: boolean) => {
  isSearchMode.value = state;
};
</script>

<template>
  <div class="chat-rooms">
    <transition>
      <div class="chat-rooms__header">
        <input-field-component
          :class="{ 'search-mode': isSearchMode }"
          placeholder="search"
          v-model="inputModel"
          @focus="onSearchMode(true)"
          @blur="onSearchMode(false)"
          @change="emit('chatSelect', inputModel)"
        />
        <svg-add
          class="pointer"
          v-if="!isSearchMode"
          @click="emit('addRoom')"
        />
      </div>
    </transition>
    <div class="chat-rooms__list">
      <div
        class="chat-rooms__item pointer"
        :class="{ active: item.id === selectedRoom }"
        v-for="item in list"
        :key="`chat-list-item-${item.id}`"
        @click="emit('chatSelect', item.id)"
      >
        <div class="chat-rooms__item-avatar">
          <user-image :picture="item.roomImage" />
        </div>
        <div class="chat-rooms__item-content">
          <div>
            <div class="chat-rooms__item-name">
              {{ item.roomName }}
            </div>
            <div class="chat-rooms__item-lastmessage">
              {{ item.roomLastMessage }}
            </div>
          </div>
          <div class="chat-rooms__item-info">
            <div class="chat-rooms__item-status">
              <svg-read />
            </div>
            <div class="chat-rooms__item-date">
              {{ item.roomLastMessageDate }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<!--<style scoped>-->

<!--</style>-->
