<script lang="ts" setup>
import type { ModelList } from "../../../types/common/Dropdown";
import { onBeforeMount, onMounted, type Ref, ref } from "vue";
import { FALSE } from "sass";
import SvgArrowDown from "../../assets/svg/SvgArrowDown.vue";

const props = defineProps({
  list: {
    type: Array as () => ModelList[],
    required: true,
  },
  title: {
    type: String,
    default: "Select",
  },
  selectedItem: {
    type: Object as () => ModelList,
    default: null,
  },
  classPurple: {
    type: Boolean,
    default: false,
  },
  classWhite: {
    type: Boolean,
    default: false,
  },
});
const selectedItem: Ref<ModelList | null> = ref(null);
const isOpenList: Ref<boolean> = ref(false);
const emit = defineEmits(["select"]);

onBeforeMount(() => {
  if (props.selectedItem) {
    selectedItem.value = props.selectedItem;
  }
});

const onOpen = (): void => {
  isOpenList.value = !isOpenList.value;
};

const onSelect = (item: ModelList): void => {
  selectedItem.value = item;
  isOpenList.value = false;
  emit("select", item);
};

const onOutsideClick = (): void => {
  isOpenList.value = false;
};
</script>

<template>
  <div
    class="dropdown"
    :class="{ white: classWhite, purple: classPurple }"
    v-click-outside="onOutsideClick"
  >
    <div class="dropdown-wrap pointer" @click="onOpen">
      <div class="dropdown__title" @click="onOpen" v-if="!selectedItem">
        {{ title }}
      </div>
      <div class="dropdown__selected" @click="onOpen" v-else>
        {{ selectedItem.name }}
      </div>
      <span class="dropdown__arrow" v-if="classPurple || classWhite">
        <svg-arrow-down />
      </span>
    </div>
    <div class="dropdown__list" v-if="isOpenList">
      <div
        class="dropdown__item"
        v-for="item in list"
        :key="`drop-down-item-${item.value}`"
        @click="onSelect(item)"
      >
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "src/style/common/dropdown";
</style>
