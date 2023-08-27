<script lang="ts" setup>
import MenuService from "@/mocks/service/MenuService";
</script>

<template>
  <div class="menu-services">
    <div
      class="menu-services__item pointer"
      v-for="item in MenuService"
      :key="`menu-service-item-${item.value}`"
    >
      <router-link :to="{ name: item.value }">
        <span class="menu-services__item__icon" v-if="item?.icon">
          <component :is="item?.icon" />
        </span>
        <span class="menu-services__item__name">
          {{ item.name }}
        </span>
      </router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/style/layout/menu";
</style>
