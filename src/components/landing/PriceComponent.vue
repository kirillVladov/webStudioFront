<script setup lang="ts">
import SectionHeaderComponent from "../common/SectionHeaderComponent.vue";
import SvgDone from "../../assets/svg/common/SvgDone.vue";

const TEMP_PRICES = [
  {
    name: "Web",
    description:
      "Some text text text about this idk and we talking how this needed and cool",
    price: "$2,900/mo",
    advantages: ["Something", "Anything", "Web design", "Test", "Test"],
  },
  {
    name: "Web",
    description:
      "Some text text text about this idk and we talking how this needed and cool",
    price: "$2,900/mo",
    advantages: ["Something", "Anything", "Web design", "Test", "Test"],
  },
  {
    name: "Web",
    description:
      "Some text text text about this idk and we talking how this needed and cool",
    price: "$2,900/mo",
    advantages: ["Something", "Anything", "Web design", "Test", "Test"],
  },
];
</script>

<template>
  <div class="landing-price" id="pricing">
    <div class="landing-price__wrap">
      <section-header-component class="landing__price__header">
        Pricing
      </section-header-component>
      <div class="landing-price__description">
        Email and phone calls have long been at the center of every business
        messaging strategy. They’re not new tools. But they’re reliable and some
        of the most widely adopted forms of communication in the world.
      </div>
      <div class="landing-price__list">
        <div
          class="landing-price__item"
          v-for="(item, index) in TEMP_PRICES"
          :key="index"
        >
          <div class="landing-price__item-name">
            {{ item.name }}
          </div>
          <div class="landing-price__item-description">
            {{ item.description }}
          </div>
          <div class="landing-price__item-price">
            {{ item.price }}
          </div>
          <div class="landing-price__item-advantages">
            <div class="landing-price__item-advantages-title">
              What you get:
            </div>
            <div
              v-for="(tag, tagIndex) in item.advantages"
              class="landing-price__item-advantages-item"
              :key="`tag-${tagIndex}`"
            >
              <svg-done />
              {{ tag }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
