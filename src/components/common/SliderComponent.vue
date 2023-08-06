<script setup>
  import {ref} from "vue";

  defineProps({
    list: {
      type: Array,
      default: [],
    },
  })

  const currentPage = ref(0);

  const onSlide = (isPrev) => {
    currentPage.value += isPrev ? -1 : 1;
    // if(isPrev) {
    //   currentPage.value--;
    //   return;
    // }
    //
    // currentPage.value++;
  }
</script>

<template>
  <div class="slider">
      <span class="slider__button-prev pointer">
          {{ "<" }}
      </span>
      <div class="slider__list">
        <div class="slider__item" v-for="item in list">
            <div class="slider__item-image">
                <img :src="item.image" :alt="item.name" />
            </div>
            <div class="slider__item-name">
                {{item.name}}
            </div>
            <div
                 v-if="item.hasOwnProperty('role')"
                 class="slider__item-role"
            >
                {{item.role}}
            </div>
        </div>
      </div>
      <span class="slider__button-next pointer">
          {{ ">" }}
      </span>
  </div>
</template>

<style scoped lang="scss">
  @import "../../style/common/slider";
</style>