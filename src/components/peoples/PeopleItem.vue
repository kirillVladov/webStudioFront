<script lang="ts" setup>
import { Profile } from "../../../types/common/user";

defineProps({
  user: {
    type: Object as () => Profile,
    required: true,
  },
});
</script>

<template>
  <div class="peoples__list-item">
    <div class="peoples__list-item__image">
      <img :src="user?.avatar" :alt="user.name" />
    </div>
    <div class="peoples__list-item__name">
      {{ user.name }}
    </div>
    <div v-if="user.hasOwnProperty('role')" class="peoples-item__role">
      {{ user.role }}
    </div>
  </div>
</template>
