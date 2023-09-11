<script lang="ts" setup>
import { Ref, ref } from "vue";
import ProfileHeaderComponent from "../components/profile/ProfileHeaderComponent.vue";
import { Profile } from "../../types/common/user";
import ProfileInfoComponent from "../components/profile/ProfileInfoComponent.vue";
import { useUserStroe } from "../stores/user";

const userStore = useUserStroe();
</script>

<template>
  <div class="profile">
    <profile-header-component :user="userStore.profile" />
    <profile-info-component :user="userStore.profile" />
  </div>
</template>

<style lang="scss">
@import "@/style/profile";
</style>
