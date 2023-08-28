<script lang="ts" setup>
import { Ref, ref } from "vue";
import ProfileHeaderComponent from "../components/profile/ProfileHeaderComponent.vue";
import { Profile } from "../../types/common/user";
import ProfileInfoComponent from "../components/profile/ProfileInfoComponent.vue";

const tempUser: Ref<Profile> = ref({
  name: "Test",
  surname: "Test",
  phoneNumber: "89438934",
  avatar: "/src/assets/img/testImgProject.png",
  email: "test",
  role: "employer",
  userId: "648fe457e2ffca74033f49aa",
});
</script>

<template>
  <div class="profile">
    <profile-header-component :user="tempUser" />
    <profile-info-component :user="tempUser" />
  </div>
</template>

<style lang="scss">
@import "@/style/profile";
</style>
