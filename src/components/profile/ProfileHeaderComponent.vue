<script lang="ts" setup>
import UserImage from "../common/UserImage.vue";
import { Profile } from "../../../types/common/user";

const props = defineProps({
  user: {
    type: Object as () => Profile,
    required: true,
  },
});
</script>

<template>
  <div class="profile-header">
    <span class="profile-header__avatar">
      <user-image :picture="user.avatar" />
    </span>
    <div class="profile-header__info">
      <div class="profile-header__name">
        {{ `${user.surname} ${user.name}` }}
      </div>
      <div class="profile-header__role">
        {{ user.role }}
      </div>
    </div>
    <div class="profile-header__contacts">
      <div class="profile-header__contacts__phone">
        phone: {{ user.phoneNumber }}
      </div>
      <div class="profile-header__contacts__email">email: {{ user.email }}</div>
    </div>
  </div>
</template>
