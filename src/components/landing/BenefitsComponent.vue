<script setup>
import SectionHeaderComponent from "../common/SectionHeaderComponent.vue";
import ButtonComponent from "../common/ButtonComponent.vue";
import BenefitsList from "../../mocks/landing/BenefitsList";
import WhiteRabbitFontComponent from "../common/WhiteRabbitFontComponent.vue";
</script>

<template>
  <div class="benefits" id="benefits">
      <div class="benefits__header">
          <section-header-component>
              Benefits
          </section-header-component>
      </div>
      <div class="benefits__description">
          You'll receive all the designs you need, delivered fast and for one fixed price. No limits on scope, just high-quality work backed by unlimited edits. Yep, it's genuinely as good as it sounds.
      </div>
      <div class="benefits__see-plans">
          <button-component title="see plans" />
      </div>
      <div class="benefits__list">
          <div
                  class="benefits__list__item"
                  v-for="(item, idx) in BenefitsList"
                  :key="`benefit-item-${idx}`"
          >
              <div class="benefits__list__item__header">
                  <white-rabbit-font-component>
                      {{item.header}}
                  </white-rabbit-font-component>
              </div>
              <div class="benefits__list__item__description">
                  {{item.description}}
              </div>
          </div>
      </div>
  </div>
</template>
