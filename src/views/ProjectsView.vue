<script lang="ts" setup>
import { onMounted } from "vue";
import { useProjectStore } from "../stores/projects";
import ProjectItemComponent from "../components/projects/ProjectItemComponent.vue";

const projectStore = useProjectStore();

onMounted(() => {
  if (!projectStore.getProjectList?.length) {
    projectStore.updateProjects("");
  }
});
</script>

<template>
  <div class="projects">
    <div class="projects__list">
      <project-item-component
        v-for="(item, index) in projectStore.getProjectList"
        :key="`project-item-${index}`"
        :item="item"
      />
    </div>
  </div>
</template>

<style lang="scss">
@import "@/style/projects/projects-list";
</style>
