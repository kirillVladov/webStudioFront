<script lang="ts" setup>
import { ref } from "vue";
import UserImage from "../components/common/UserImage.vue";

const tempUser = ref({
  name: "Test",
  surname: "Test",
  phone_number: null,
  avatar: "/src/assets/img/test_ladislav.jpg",
  email: "test",
  role: null,
  userId: "648fe457e2ffca74033f49aa",
});
</script>

<template>
  <div class="profile">
    <div class="profile-preview">
      <span class="profile-preview__avatar">
        <user-image :picture="tempUser.avatar" />
      </span>
      <span class="profile-preview__name">
        {{ `${tempUser.surname} ${tempUser.name}` }}
      </span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/style/profile";
</style>
