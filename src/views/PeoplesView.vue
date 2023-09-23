<script lang="ts" setup>
import { onBeforeMount } from "vue";
import { useUserStroe } from "../stores/user";
import PeopleItem from "../components/peoples/PeopleItem.vue";
import FilterComponent from "../components/common/FilterComponent.vue";

const userStore = useUserStroe();

onBeforeMount(() => {
  userStore.updateAllUsers();
});

const TEMP_PEOPLES = [
  {
    name: "employers",
    value: "employers",
  },
  { name: "workers", value: "workers" },
];
</script>

<template>
  <div class="peoples">
    <!--    <div class="peoples__header">-->
    <!--      <filter-component :items="TEMP_PEOPLES" />-->
    <!--    </div>-->
    <div class="peoples__list">
      <people-item
        v-for="(user, idx) in userStore.getAllUsers"
        :key="`people-item-${idx}-${user.name}`"
        :user="user"
      />
    </div>
  </div>
</template>

<style lang="scss">
@import "@/style/peoples";
</style>
