<script setup>
import FullScreenComponent from "../components/landing/fullScreenComponent.vue";
import ProjectsComponent from "../components/landing/ProjectsComponent.vue";
import BenefitsComponent from "../components/landing/BenefitsComponent.vue";
import TeamComponent from "../components/landing/TeamComponent.vue";
</script>

<template>
  <full-screen-component />
  <projects-component />
  <benefits-component />
  <team-component />
</template>

<style lang="scss">
@import "../style/landing/index";
</style>
