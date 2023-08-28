<script lang="ts" setup>
import { Profile } from "../../../types/common/user";

const props = defineProps({
  user: {
    type: Object as () => Profile,
    required: true,
  },
});
</script>

<template>
  <div class="profile-info">
    some info
    <div class="profile-info__test-wrap">
      {{ user }}
    </div>
  </div>
</template>
