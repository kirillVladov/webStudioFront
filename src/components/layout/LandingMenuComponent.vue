<script setup lang="ts">
import LandingStructure from "../../mocks/landing/LandingStructure";
import WhiteRabbitFontComponent from "../common/WhiteRabbitFontComponent.vue";
import { computed } from "vue";
import { scrollWindowByHeight } from "../../services/common";

const isShow = computed(() => window.scrollY < window.innerHeight);
const LandingStructureFiltered = computed(() =>
  LandingStructure.filter(
    ({ name }) =>
      name !== "full-screen-component" && name !== "contact-us-modal-component"
  )
);
const onScrollToBlock = (id: string) => {
  const element = document.getElementById(id);

  if (!element && element.offsetTop) return;

  scrollWindowByHeight(element.offsetTop);
};
const prepareOrder = (index) => (index >= 10 ? index : `0${index}`);
</script>

<template>
  <div class="menu">
    <div
      class="menu-item pointer"
      :class="{ 'is-show': isShow }"
      v-for="(item, index) in LandingStructureFiltered"
      :key="`menu-item-${item.name}`"
      @click="onScrollToBlock(item.link)"
    >
      <span class="menu-item-order">
        <white-rabbit-font-component>
          {{ prepareOrder(index + 1) }}
        </white-rabbit-font-component>
      </span>
      <span class="menu-item-name">
        {{ item.name }}
      </span>
    </div>
  </div>
</template>
