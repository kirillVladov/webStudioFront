<script lang="ts" setup>
import SvgUser from "../../assets/svg/SvgUser.vue";
import { ModelList } from "../../../types/common/Dropdown";
import PopUpComponent from "./PopUpComponent.vue";
import { Ref, ref } from "vue";
import en from "../../services/translates/en";

defineProps({
  picture: {
    type: String,
    default: "",
  },
  useMenu: {
    type: Boolean,
    default: false,
  },
  menuList: {
    type: Array as () => ModelList[],
    default: () => [],
  },
});
const emit = defineEmits(["menuSelect", "enter"]);
const isShowPopUp: Ref<boolean> = ref(false);
const onMenuSelect = (item: ModelList): void => {
  emit("menuSelect", item);
};

const onShowPopUp = (item: ModelList): void => {
  isShowPopUp.value = !isShowPopUp.value;
};
</script>

<template>
  <span class="account-button pointer">
    <span class="account-button-picture" @click="onShowPopUp">
      <img v-if="picture?.length" :src="picture" alt="account-button" />
      <svg-user v-else />
    </span>
    <span v-if="useMenu && isShowPopUp" class="account-button__popup">
      <pop-up-component :list="menuList" @select="onMenuSelect" />
    </span>
  </span>
</template>

<style lang="scss" scoped>
@import "@/style/common/account-button";
</style>
