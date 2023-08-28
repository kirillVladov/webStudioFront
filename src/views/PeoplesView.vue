<script lang="ts" setup>
import { onBeforeMount } from "vue";
import { useUserStroe } from "../stores/user";
import PeopleItem from "../components/peoples/PeopleItem.vue";

const userStore = useUserStroe();

onBeforeMount(() => {
  userStore.updateAllUsers();
});
</script>

<template>
  <div class="peoples">
    <people-item
      v-for="(user, idx) in userStore.getAllUsers"
      :key="`people-item-${idx}-${user.name}`"
      :user="user"
    />
  </div>
</template>

<style lang="scss">
@import "@/style/peoples";
</style>
