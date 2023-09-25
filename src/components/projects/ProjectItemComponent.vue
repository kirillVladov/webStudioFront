<script setup lang="ts">
import WhiteRabbitFontComponent from "@/components/common/WhiteRabbitFontComponent.vue";
import { ProjectItemType } from "../../../types/projects";

defineProps({
  item: {
    type: Object as () => ProjectItemType,
    required: true,
  },
});
</script>

<template>
  <div class="project-item">
    <div class="project-item__header">
      <div class="project-item__header-text">
        <div class="project-item__header-text__header">
          <white-rabbit-font-component>
            {{ item.name }}
          </white-rabbit-font-component>
        </div>
        <div class="project-item__header-text__subheader">
          {{ item.description }}
        </div>
      </div>
      <div class="project-item__header-year">
        <white-rabbit-font-component>
          {{ item.year }}
        </white-rabbit-font-component>
      </div>
    </div>
    <span class="project-item__image">
      <img :src="`${item.image}`" :alt="item.name" />
    </span>
  </div>
</template>

<style lang="scss">
@import "@/style/projects/project-item";
</style>
