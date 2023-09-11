<script lang="ts" setup>
import { ModelList } from "../../../types/common/Dropdown";

defineProps({
  list: {
    type: Array as () => ModelList[],
  },
});

const emit = defineEmits(["select"]);

const onClick = (item: ModelList) => {
  emit("select", item);
};
</script>

<template>
  <div class="popup">
    <div
      class="popup__item pointer"
      v-for="(item, index) in list"
      :key="`popup-item-${index}`"
      @click="onClick(item)"
    >
      <span class="popup__item-icon" v-if="'icon' in item">
        <component :is="item.icon" />
      </span>
      <span class="popup__item-name">{{ item.name }}</span>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/style/common/popup";
</style>
