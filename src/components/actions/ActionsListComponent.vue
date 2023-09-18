<script lang="ts" setup>
import SvgDelete from "../../assets/svg/common/SvgDelete.vue";
import SvgMessage from "../../assets/svg/chat/SvgMessage.vue";
import { ActionStatus } from "../../../types/actions";
import WhiteRabbitFontComponent from "../common/WhiteRabbitFontComponent.vue";

defineProps({
  list: {
    type: Array,
    required: true,
  },
});

const emit = defineEmits(["openTask", "startChat", "delete"]);

enum ActionStatusColorType {
  declined = "red",
  allowed = "green",
  awaiting = "gray",
}
const getStatusColor = (color: ActionStatus): ActionStatusColorType => {
  return ActionStatusColorType[color];
};
</script>

<template>
  <div class="actions-list">
    <div class="actions-list__header">
      <div>status</div>
      <div></div>
      <div>date</div>
    </div>
    <div
      class="actions-list__item pointer"
      v-for="action in list"
      :key="`action-item-${action.actionId}`"
      @click="emit('openTask', action.actionId)"
    >
      <div
        class="actions-list__item--status pointer"
        v-tooltip="action.status"
        :style="{ background: getStatusColor(action.status) }"
      ></div>
      <div class="actions-list__item--contact">
        <white-rabbit-font-component class="actions-list__item--name">
          {{ action.name }}
        </white-rabbit-font-component>
        <div class="actions-list__item--description">
          {{ action.description }}
        </div>
      </div>
      <white-rabbit-font-component class="actions-list__item--date">
        {{ action.expirationDate }}
      </white-rabbit-font-component>
      <div class="actions-list__item--controllers">
        <span
          class="actions-list__item--message pointer"
          @click.prevent.stop="emit('startChat', action.actionId)"
        >
          <svg-message />
        </span>
        <span
          class="actions-list__item--delete pointer"
          @click.prevent.stop="emit('delete', action.actionId)"
        >
          <svg-delete />
        </span>
      </div>
    </div>
  </div>
</template>
