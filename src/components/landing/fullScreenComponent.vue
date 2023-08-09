<script setup lang="ts">
import LogoComponent from "../common/LogoComponent.vue";
import SocialsListComponent from "../common/SocialsListComponent.vue";
import LangComponent from "../common/LangComponent.vue";
import ButtonComponent from "../common/ButtonComponent.vue";
import WhiteRabbitFontComponent from "../common/WhiteRabbitFontComponent.vue";
import {useModalStore} from "../../stores/modal";

const modalStore = useModalStore();
const onClickOpenModal = () => {
    modalStore.showModal("contactUs")
}
</script>

<template>
  <div class="landing__full-screen">
      <div class="landing__full-screen__header">
          <span class="landing__full-screen__header__logo">
            <LogoComponent />
          </span>
          <span class="landing__full-screen__header__socials">
              <SocialsListComponent />
          </span>
          <span class="landing__full-screen__header__lang">
            <lang-component />
          </span>
      </div>
      <div class="landing__full-screen__text">
          <div class="landing__full-screen__title">
                  {{$t("full-screen.header")}}
          </div>
          <div class="landing__full-screen__headline">
              <white-rabbit-font-component>
                  Transforming your Ideas into Web Reality
              </white-rabbit-font-component>
          </div>
          <div class="landing__full-screen__subtitle">
              We creating Web resourses - such as web-pages or apps
          </div>

      </div>
      <div class="landing__full-screen__button">
          <button-component @press="onClickOpenModal" title="I have a project to make!">
              <template #after-title>
                  >
              </template>
          </button-component>
      </div>
  </div>
</template>

