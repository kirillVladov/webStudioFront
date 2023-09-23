<script setup lang="ts">
import { ref } from "vue";
import { ActionTab } from "@/types/actions/index";
import { ModelList } from "@/types/common/Dropdown";

defineProps({
  items: {
    type: Array as () => ModelList[],
    default: [],
  },
});
const emit = defineEmits(["select"]);
const currentTab = ref<ActionTab>("");

const onSelect = (action: ActionTab) => {
  currentTab.value = action;
  emit("select", action);
};
</script>

<template>
  <div class="filter">
    <div
      class="filter__item pointer"
      :class="{ active: currentTab === item.value }"
      v-for="item in items"
      :key="`filter-item-${item.value}`"
      @click="onSelect(item.value)"
    >
      {{ item.name }}
    </div>
  </div>
</template>

<style lang="scss">
@import "@/style/common/filter";
</style>
