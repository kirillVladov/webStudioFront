<template>
  <div class="user-image">
    <img v-if="picture?.length" :src="picture" alt="user-picture" />
    <svg-user v-else />
  </div>
</template>

<script lang="ts" setup>
import SvgUser from "../../assets/svg/SvgUser.vue";

defineProps({
  picture: {
    type: String,
    default: "",
  },
});
</script>

<style lang="scss">
@import "@/style/variables";
$imageSize: 100px;

.user-image {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: $imageSize;
  min-width: $imageSize;
  max-height: 100px;
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
