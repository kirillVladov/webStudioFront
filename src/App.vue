<script setup>
import LandingView from "./views/LandingView.vue";
import FooterComponent from "./components/layout/FooterComponent.vue";
</script>

<template>
  <div class="content">
      <router-view />
  </div>
  <footer-component />
</template>

<style lang="scss">
@import "./style/base";
</style>