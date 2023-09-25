<script lang="ts" setup>
import SvgClose from "../../assets/svg/modal/SvgClose.vue";
import { useModalStore } from "../../stores/modal";
import type { ModalState } from "../../../types/common/modal";
import { computed, ComputedRef, onMounted, onUnmounted, watch } from "vue";
import { debounce } from "lodash";

const props = defineProps({
  name: {
    type: String as () => ModalState,
    required: true,
  },
});
const modalStore = useModalStore();
const emit = defineEmits(["enterKey", "close"]);
const isShow: ComputedRef<boolean> = computed(() =>
  modalStore.getModalState(props.name)
);

watch(
  () => isShow.value,
  (value) => onShow(value)
);

onMounted(() => {
  document.addEventListener("keydown", keyHandler);
});

onUnmounted(() => {
  document.removeEventListener("keydown", keyHandler);
});

const keyHandler = debounce((e: KeyboardEvent) => {
  if (e.code === "Enter") emit("enterKey");
}, 300);

const onShow = (isShow: boolean) => {
  if (!isShow) emit("close");

  document.body.style.overflow = isShow ? "hidden" : "scroll";
};

const onClose = () => {
  modalStore.hideModal(props.name);
};
</script>

<template>
  <transition name="modal-window">
    <div class="modal-window" v-if="isShow">
      <div class="modal-window__content">
        <div class="modal-window__header">
          <span class="modal-window__header__title"> </span>
          <span class="modal-window__header__close pointer" @click="onClose">
            close
            <svg-close />
          </span>
        </div>
        <div class="modal-window__view">
          <slot />
        </div>
      </div>
    </div>
  </transition>
</template>

<style lang="scss">
@import "src/style/common/modal";
</style>
