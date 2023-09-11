<script lang="ts" setup>
import SvgDelete from "../../assets/svg/common/SvgDelete.vue";
import SvgMessage from "../../assets/svg/chat/SvgMessage.vue";
import { ActionStatus } from "../../../types/actions";

defineProps({
  list: {
    type: Array,
    required: true,
  },
});

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
    <div
      class="actions-list__item"
      v-for="action in list"
      :key="`action-item-${action.id}`"
    >
      <div
        class="actions-list__item--status"
        :style="{ color: getStatusColor(action.status) }"
      >
        {{ action.status }}
      </div>
      <div class="actions-list__item--contact">
        <div class="actions-list__item--name">
          {{ action.name }}
        </div>
        <div class="actions-list__item--description">
          {{ action.description }}
        </div>
      </div>
      <div class="actions-list__item--date">
        {{ action.date }}
      </div>
      <div class="actions-list__item--controllers">
        <span class="actions-list__item--message pointer">
          <svg-message />
        </span>
        <span class="actions-list__item--delete pointer">
          <svg-delete />
        </span>
      </div>
    </div>
  </div>
</template>
