<script setup>
import LandingView from "./views/LandingView.vue";
import FooterComponent from "./components/layout/FooterComponent.vue";
import HeaderComponent from "@/components/layout/HeaderComponent.vue";
import MenuComopnent from "@/components/layout/MenuComopnent.vue";
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const isRouteLanding = computed(() => route.path === "/");
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
