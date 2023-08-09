<script lang="ts" setup>
import SvgClose from "../../assets/svg/common/modal/SvgClose.vue";
import {useModalStore} from "../../stores/modal";
import type {ModalState} from "../../../types/common/modal";

const props = defineProps({
    name: {
        type: String as () => ModalState,
        required: true,
    }
})
const modalStore = useModalStore();

const onClose = () => {
    modalStore.hideModal(props.name)
}
</script>

<template>
  <div class="modal-window">
      <div class="modal-window__content">
        <div class="modal-window__header">
          <span class="modal-window__header__title">
          </span>
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
</template>

<style lang="scss">
  @import "src/style/common/modal";
</style>