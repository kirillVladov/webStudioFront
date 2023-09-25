<script setup lang="ts">
import { ref } from "vue";
import ButtonComponent from "./ButtonComponent.vue";
import { Ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { NavigationOptions } from "swiper/types";
import { Autoplay, Grid, Navigation } from "swiper/modules";

defineProps({
  list: {
    type: Array,
    default: [],
  },
});
const emit = defineEmits(["change"]);
const initialSlide: Ref<number> = ref(0);
const navigationOptions: NavigationOptions = {
  prevEl: `.slider__button-prev`,
  nextEl: `.slider__button-next`,
};

const onSlideChange = (index: number) => {
  initialSlide.value = index;
  emit("change", index);
};
</script>

<template>
  <div class="slider">
    <button-component title="<" class="slider__button-prev pointer" />
    <!--          :slides-per-view="5"-->
    <swiper
      class="slider__list"
      :modules="[Grid, Navigation, Autoplay]"
      :space-between="50"
      :slides-per-view="5"
      loop
      :navigation="navigationOptions"
      :initial-slide="initialSlide"
    >
      <swiper-slide class="slider__item" v-for="item in list">
        <div class="slider__item-image">
          <img :src="item.avatar" :alt="item.name" />
        </div>
        <div class="slider__item-name">
          {{ item.name }}
        </div>
        <div v-if="item.hasOwnProperty('role')" class="slider__item-role">
          {{ item.role }}
        </div>
      </swiper-slide>
    </swiper>
    <button-component title=">" class="slider__button-next pointer" />
  </div>
</template>

<style scoped lang="scss">
@import "../../style/common/slider";
</style>
