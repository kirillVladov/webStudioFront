<script lang="ts" setup>

import SectionHeaderComponent from "../../common/SectionHeaderComponent.vue";
import ResourcesList from "../../../mocks/landing/ResourcesList";
import ResourcesItem from "./ResourcesItem.vue";
</script>

<template>
  <div class="resources">
    <div class="resources__info">
        <div class="resources__info-header">
            <section-header-component>
                Resources
            </section-header-component>
        </div>
        <div class="resources__info-description">
            Any text about this
        </div>
    </div>
      <div class="resources__list">
          <resources-item
                  v-for="item in ResourcesList"
                  :item="item"
                  :key="`resources-item-${item.name}`"
          />
      </div>
  </div>
</template>
