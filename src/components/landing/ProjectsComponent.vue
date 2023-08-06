<script setup>
import SectionHeaderComponent from "../common/SectionHeaderComponent.vue";
import ButtonsGroupComponent from "../common/ButtonsGroupComponent.vue";
import ProjectsButtonGroup from "../../mocks/landing/ProjectsButtonGroup";
import ProjectsListDEMO from "../../mocks/landing/ProjectsListDEMO";
import WhiteRabbitFontComponent from "../common/WhiteRabbitFontComponent.vue";
</script>

<template>
  <div class="projects">
      <div class="projects__header">
          <section-header-component>
              Projects that already made
          </section-header-component>
      </div>
      <div class="projects__button-group">
          <buttons-group-component :list="ProjectsButtonGroup" />
      </div>
      <div class="projects__list">
          <div
               class="projects__list__item"
               v-for="(item, idx) in ProjectsListDEMO"
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
                          {{item.subHeader}}
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
