<script lang="ts" setup>
import LogoComponent from "../common/LogoComponent.vue";
import AccountButtonComponent from "../common/AccountButtonComponent.vue";
import { useRouter } from "vue-router";
import LangComponent from "../common/LangComponent.vue";

const router = useRouter();
const redirectToLanding = () => {
  router.push({ name: "landing" });
};
</script>

<template>
  <div class="header">
    <span class="header__logo pointer" @click="redirectToLanding">
      <logo-component />
    </span>
    <div class="header__rightside">
      <span class="header__account">
        <account-button-component picture="/src/assets/img/test_ladislav.jpg" />
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
