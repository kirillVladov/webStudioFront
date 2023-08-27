<script lang="ts" setup>
import SvgUser from "../../assets/svg/SvgUser.vue";

const props = defineProps({
  picture: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <span class="account-button pointer">
    <span class="account-button-picture">
      <img v-if="picture.length" :src="picture" alt="account-button" />
      <svg-user v-else />
    </span>
  </span>
</template>

<style lang="scss" scoped>
@import "@/style/common/account-button";
</style>
