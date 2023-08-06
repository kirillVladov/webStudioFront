<script setup lang="ts">
import LogoComponent from "../common/LogoComponent.vue";
import SocialsListComponent from "../common/SocialsListComponent.vue";
</script>

<template>
  <div class="footer">
      <div class="footer-wrap">
      <div class="footer-logo">
         <logo-component />
      </div>
      <div class="footer__email">
        <div class="footer__email-title">
            Email us
        </div>
        <div class="footer__email-content">
          Email@mail.com
        </div>
      </div>
      <div class="footer__socials">
          <div class="footer__socials-title">
            Follow
          </div>
          <div class="footer__socials-content">
            <socials-list-component />
          </div>
      </div>
      <div class="footer__links">
          <a href="#">
              Privacy Policy
          </a>
          <a href="#">
              Terms of Service
          </a>
      </div>
      </div>
  </div>
</template>

<style scoped>

</style>