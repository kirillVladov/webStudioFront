<script setup lang="ts">
import ModalWindowComponent from "../ModalWindowComponent.vue";
import { Cropper, type CropperResult } from "vue-advanced-cropper";
import "vue-advanced-cropper/dist/style.css";
import ButtonComponent from "../ButtonComponent.vue";
import { ref } from "vue";

defineProps({
  image: {
    type: String,
    required: true,
  },
});
const emit = defineEmits(["upload"]);
const cropperRef = ref<{ getResult: () => CropperResult } | null>(null);
const onChange = (e) => {
  console.log(e);
};

const onUpload = () => {
  console.log(cropperRef);
};
</script>

<template>
  <modal-window-component class="upload-modal" name="upload">
    <cropper
      ref="cropperRef"
      class="upload-modal__cropper"
      :src="image"
      @change="onChange"
    />
    <div class="upload-modal__submit">
      <button-component title="Upload" @click="onUpload" />
    </div>
  </modal-window-component>
</template>

<style lang="scss">
@import "@/style/common/modals/upload-modal";
</style>
