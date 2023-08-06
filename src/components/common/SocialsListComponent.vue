<script setup>
import SocialsList from "../../mocks/landing/SocialsList.ts";
</script>

<template>
  <div class="socials">
      <div class="socials-item" v-for="(item, idx) in SocialsList" :key="`social-list-item-${idx}`">
          <a :href="item.value">
              <component :is="item.icon" />
          </a>
      </div>
  </div>
</template>
