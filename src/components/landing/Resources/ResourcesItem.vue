<script setup lang="ts">
  import {ResourceItem} from "../../../../types/landing/resources";
  import {getComponent} from "../../../services/DynamicService";
  import WhiteRabbitFontComponent from "../../common/WhiteRabbitFontComponent.vue";

  defineProps({
      item: {
          type: Object as () => ResourceItem,
          required: true
      }
  })
</script>

<template>
  <div class="resources__item">
      <div class="resources__item-icon">
          <component :is="getComponent(item.icon)" />
      </div>
      <white-rabbit-font-component class="resources__item-name">
          {{item.name}}
      </white-rabbit-font-component>
      <div class="resources__item-description">
          {{item.description}}
      </div>
      <div class="resources__item-tags" v-if="item.hasOwnProperty('tags') && item.tags?.length">
          <span class="resources__item-tags__item" v-for="tag in item?.tags" :key="`resource-item-tag-${item.name}`">
              {{tag}}
          </span>
      </div>
  </div>
</template>

<!--<style scoped>-->

<!--</style>-->