<script setup>
import SectionHeaderComponent from "../common/SectionHeaderComponent.vue";
import SliderComponent from "../common/SliderComponent.vue";
import TeamList from "../../mocks/landing/TeamList.ts";
import { onBeforeMount } from "vue";
import { useUserStroe } from "@/stores/user";

const userStore = useUserStroe();

onBeforeMount(() => {
  userStore.updateAllUsers();
});
</script>

<template>
  <div class="team" id="team">
    <div class="team__headline">
      <section-header-component> Meet the team </section-header-component>
    </div>
    <div class="team__description">
      Email and phone calls have long been at the center of every business
      messaging strategy. They’re not new tools. But they’re reliable and some
      of the most widely adopted forms of communication in the world.
    </div>
    <div class="team__list">
      <slider-component :list="userStore.getAllUsers" />
    </div>
  </div>
</template>
