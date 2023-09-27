<script setup lang="ts">
import SectionHeaderComponent from "../common/SectionHeaderComponent.vue";
import ButtonsGroupComponent from "../common/ButtonsGroupComponent.vue";
import ProjectsButtonGroup from "../../mocks/landing/ProjectsButtonGroup";
import WhiteRabbitFontComponent from "../common/WhiteRabbitFontComponent.vue";
import { onBeforeMount, ref } from "vue";
import { useProjectStore } from "../../stores/projects/index";
import { Ref } from "vue";
import PreloaderComponent from "../common/PreloaderComponent.vue";
import ProjectItemComponent from "../projects/ProjectItemComponent.vue";

const projectStore = useProjectStore();
const isShowPreload: Ref<boolean> = ref(true);
onBeforeMount(() => {
  projectStore.updateProjects("").then(() => {
    setTimeout(() => {
      isShowPreload.value = false;
    }, 3000);
  });
});
</script>

<template>
  <div class="landing-projects" id="projects">
    <div class="landing-projects__header">
      <section-header-component>
        Projects that already made
      </section-header-component>
    </div>
    <div class="landing-projects__button-group">
      <buttons-group-component :list="ProjectsButtonGroup" />
    </div>
    <preloader-component v-if="isShowPreload" />
    <div class="landing-projects__list" v-else>
      <project-item-component
        v-for="(item, idx) in projectStore.getProjectList"
        :key="`project-item-${idx}`"
        :item="item"
      />
    </div>
  </div>
</template>
