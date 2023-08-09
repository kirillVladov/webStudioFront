<script setup>
import FullScreenComponent from "../components/landing/fullScreenComponent.vue";
import ProjectsComponent from "../components/landing/ProjectsComponent.vue";
import BenefitsComponent from "../components/landing/BenefitsComponent.vue";
import TeamComponent from "../components/landing/TeamComponent.vue";
import ContactUsComponent from "../components/landing/ContactUsComponent.vue";
import ResourcesComponent from "../components/landing/Resources/ResourcesComponent.vue";
import ContactUsModalComponent from "../components/common/modals/ContactUsModalComponent.vue";
</script>

<template>
  <full-screen-component />
  <projects-component />
  <benefits-component />
  <team-component />
  <resources-component />
  <contact-us-component />
  <contact-us-modal-component />
</template>

<style lang="scss">
@import "../style/landing/index";
</style>
