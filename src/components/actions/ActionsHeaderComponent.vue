<script lang="ts" setup>
import { ref } from "vue";
import {
  ActionStatus,
  ActionTab,
  ActionTabType,
  ActionTabValue,
} from "../../../types/actions";

const actions: ActionTabValue[] = [
  {
    name: "history",
    value: ActionTabType.history,
  },
  {
    name: "not read",
    value: ActionTabType.active,
  },
];

const emit = defineEmits(["select"]);
const currentTab = ref<ActionTab>("history");

const onSelect = (action: ActionTab) => {
  currentTab.value = action;
  emit("select", action);
};
</script>

<template>
  <div class="actions-header">
    <div
      class="actions-header__item pointer"
      :class="{ active: currentTab === action.value }"
      v-for="action in actions"
      :key="`action-header-item-${action.value}`"
      @click="onSelect(action.value)"
    >
      {{ action.name }}
    </div>
  </div>
</template>
