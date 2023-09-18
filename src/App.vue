<script setup>
import FooterComponent from "./components/layout/FooterComponent.vue";
import HeaderComponent from "@/components/layout/HeaderComponent.vue";
import MenuComopnent from "@/components/layout/MenuComopnent.vue";
import { computed, onBeforeMount } from "vue";
import { useRoute } from "vue-router";
import { useUserStroe } from "@/stores/user";
import { useSettingsStore } from "@/stores/settings/index";

const route = useRoute();
const userStore = useUserStroe();
const settingsStore = useSettingsStore();
const isRouteLanding = computed(() => route.path === "/");

const init = async () => {
  if (userStore.getProfile) {
    await userStore.updateProfile();
  }

  if (settingsStore.theme === "dark") {
    const mainBlock = document.body;
    mainBlock.classList.add("dark");
  }
};

onBeforeMount(() => init());
</script>

<template>
  <header-component v-if="!isRouteLanding" />
  <div class="content" :class="{ landing: isRouteLanding }">
    <menu-comopnent v-if="!isRouteLanding" />
    <router-view />
  </div>
  <footer-component />
</template>

<style lang="scss">
@import "./style/base";
</style>
