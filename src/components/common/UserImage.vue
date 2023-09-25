<script lang="ts" setup>
import SvgUser from "../../assets/svg/SvgUser.vue";
import { useModalStore } from "../../stores/modal";
import UploadImageModal from "./modals/UploadImageModal.vue";
import { nextTick, Ref, ref } from "vue";
import api from "../../services/api/api";
import { ErrorResponse } from "../../../types/common/responses";
import { uploadImage } from "../../services/api/requests/uploadImage";

const props = defineProps({
  picture: {
    type: String,
    default: "",
  },
  useEdit: {
    type: Boolean,
    default: false,
  },
});

const modalStore = useModalStore();
const uploadedImage: Ref<string> = ref("");

const onEdit = async (e: InputEvent) => {
  if (!props.useEdit) return;

  const image = (e.srcElement as HTMLInputElement).files[0] as File;
  const imageString: string | ErrorResponse = await api.uploadImage(image);

  console.log([image, imageString]);

  if (typeof imageString === "object" && (imageString as ErrorResponse)?.error)
    return;
  uploadedImage.value = imageString;
  console.log([image, uploadedImage.value]);
  await nextTick();
  modalStore.showModal("upload");
};
</script>

<template>
  <input type="file" @change="onEdit" />
  <div class="user-image" :class="{ pointer: useEdit }" @click="onEdit">
    <img v-if="picture?.length" :src="picture" alt="user-picture" />
    <svg-user v-else />
  </div>
  <upload-image-modal :image="uploadedImage" />
</template>

<style lang="scss">
@import "@/style/variables";
$imageSize: 100px;

.user-image {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: $imageSize;
  min-width: $imageSize;
  min-height: $imageSize;
  max-height: $imageSize;
  background: $color-light-gray;
  border-radius: 50%;
  overflow: hidden;

  & svg {
    fill: #999999;
  }

  & img {
    aspect-ratio: 1/1;
    max-width: 100%;
    max-height: 100%;
  }
}
</style>
