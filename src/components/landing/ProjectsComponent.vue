<script setup lang="ts">
import SectionHeaderComponent from "../common/SectionHeaderComponent.vue";
import ButtonsGroupComponent from "../common/ButtonsGroupComponent.vue";
import ProjectsButtonGroup from "../../mocks/landing/ProjectsButtonGroup";
import WhiteRabbitFontComponent from "../common/WhiteRabbitFontComponent.vue";
import {onBeforeMount, ref} from "vue";
import {useProjectStore} from "../../stores/projects/index";
import {Ref} from "vue";
import PreloaderComponent from "../common/PreloaderComponent.vue";

const projectStore = useProjectStore();
const isShowPreload: Ref<boolean> = ref(true);
onBeforeMount( () => {
    projectStore.updateProjects("").then(() => {
        setTimeout(() => {
            isShowPreload.value = false
        }, 3000)
    })
})
</script>

<template>
  <div class="projects" id="projects">
      <div class="projects__header">
          <section-header-component>
              Projects that already made
          </section-header-component>
      </div>
      <div class="projects__button-group">
          <buttons-group-component :list="ProjectsButtonGroup" />
      </div>
      <preloader-component v-if="isShowPreload"/>
      <div class="projects__list" v-else>
          <div
               class="projects__list__item"
               v-for="(item, idx) in projectStore.getProjectList"
               :key="`project-item-${idx}`"
          >
              <div class="projects__list__item__header">
                  <div class="projects__list__item__header-text">
                      <div class="projects__list__item__header-text__header">
                          <white-rabbit-font-component>
                            {{item.name}}
                          </white-rabbit-font-component>
                      </div>
                      <div class="projects__list__item__header-text__subheader">
                          {{item.description}}
                      </div>
                  </div>
                  <div class="projects__list__item__header-year">
                      <white-rabbit-font-component>
                          {{item.year}}
                      </white-rabbit-font-component>
                  </div>
              </div>
              <span class="projects__list__item__image">
                  <img :src="`${item.image}`" :alt="item.name" />
              </span>
          </div>
      </div>
  </div>
</template>
