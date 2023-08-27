<template>
  <div class="user-image">
    <img v-if="picture.length" :src="picture" alt="user-picture" />
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

<style lang="scss" scoped>
@import "@/style/variables";
$imageSize: 100px;

.user-image {
  max-width: $imageSize;
  min-width: $imageSize;
  aspect-ratio: 1/1;
  background: $color-light-gray;
  border-radius: 50%;
  overflow: hidden;

  & img {
    max-width: 100%;
    max-height: 100%;
  }
}
</style>
