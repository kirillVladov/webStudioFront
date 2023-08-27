<script setup lang="ts">
  import {ResourceItem} from "../../../../types/landing/resources";
  import {getComponent} from "../../../services/DynamicService";
  import WhiteRabbitFontComponent from "../../common/WhiteRabbitFontComponent.vue";
  import {computed, onMounted, onUnmounted, Ref, ref, toRef} from "vue";

  const props = defineProps({
      item: {
          type: Object as () => ResourceItem,
          required: true
      }
  })
  const item = toRef(props, "item");
  const screenWidth = ref(window.innerWidth);
  const isOpen: Ref<boolean> = ref(false);
  const filteredTags = computed(() => {
      if(screenWidth.value > 500) return item.value?.tags;

      return item.value?.tags?.filter((item, index) => index < 3 || isOpen.value)
  })

  onUnmounted(() => {
      window.addEventListener("resize", screenHandler)
  })

  onMounted(() => {
      window.addEventListener("resize", screenHandler)
  })

  const screenHandler = () => {
      screenWidth.value = window.innerWidth;
  }

  const onCollapse = () => {
      isOpen.value = !isOpen.value;
  }
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
          <span class="resources__item-tags__item" v-for="tag in filteredTags" :key="`resource-item-tag-${item.name}`">
              {{tag}}
          </span>
      </div>
      <div @click="onCollapse" class="resources__item-tags__show-more pointer" v-if="item.hasOwnProperty('tags') && item.tags?.length">
              Show {{isOpen ? "less" : "more"}}
      </div>
  </div>
</template>

<!--<style scoped>-->

<!--</style>-->