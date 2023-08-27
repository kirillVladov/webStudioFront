<script setup>
import LandingStructure from "../mocks/landing/LandingStructure.ts";
import MenuComponent from "../components/layout/LandingMenuComponent.vue";
import ContactUsModalComponent from "@/components/common/modals/ContactUsModalComponent.vue";
import LoginModalComponent from "@/components/common/modals/LoginModalComponent.vue";
</script>

<template>
  <menu-component />
  <component
    v-for="item in LandingStructure"
    :key="`landing-item-${item.name}`"
    :is="item.component"
  />
  <contact-us-modal-component />
  <login-modal-component />
</template>

<style lang="scss">
@import "../style/landing/index";
</style>
