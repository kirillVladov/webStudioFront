<script lang="ts" setup>
import LogoComponent from "../common/LogoComponent.vue";
import AccountButtonComponent from "../common/AccountButtonComponent.vue";
import { useRouter } from "vue-router";
import LangComponent from "../common/LangComponent.vue";
import { ModelList } from "../../../types/common/Dropdown";
import { useUserStroe } from "../../stores/user";

const router = useRouter();
const userStore = useUserStroe();
const redirectToLanding = () => {
  router.push({ name: "landing" });
};

const onMenuSelect = (action: ModelList) => {
  if (action.value === "logout") {
    userStore.logOut();
  }
};
</script>

<template>
  <div class="header">
    <span class="header__logo pointer" @click="redirectToLanding">
      <logo-component />
    </span>
    <div class="header__rightside">
      <span class="header__account">
        <account-button-component
          use-menu
          :picture="userStore.getProfile?.avatar"
          :menu-list="[{ name: 'LogOut', value: 'logout' }]"
          @menu-select="onMenuSelect"
        />
      </span>
      <span class="header__lang">
        <lang-component />
      </span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/style/layout/header";
</style>
