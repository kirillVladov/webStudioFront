<script setup>
import SectionHeaderComponent from "../common/SectionHeaderComponent.vue";
import ButtonComponent from "../common/ButtonComponent.vue";
</script>

<template>
  <div class="contact-us">
      <div class="contact-us__header">
          <section-header-component>
              Get in touch
          </section-header-component>
      </div>
      <div class="contact-us__description">
          You'll receive all the designs you need, delivered fast and for one fixed price. No limits on scope, just high-quality work backed by unlimited edits. Yep, it's genuinely as good as it sounds.
      </div>
      <div class="contact-us__button">
          <button-component title="Contact us">
              <template #after-title>
                  :)
              </template>
          </button-component>
      </div>
  </div>
</template>