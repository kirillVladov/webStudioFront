<script setup lang="ts">
import LogoComponent from "../common/LogoComponent.vue";
import SocialsListComponent from "../common/SocialsListComponent.vue";
import LangComponent from "../common/LangComponent.vue";
import ButtonComponent from "../common/ButtonComponent.vue";
import WhiteRabbitFontComponent from "../common/WhiteRabbitFontComponent.vue";
import { useModalStore } from "../../stores/modal";
import { computed, onMounted, onUnmounted, ref } from "vue";
import SvgTrippleLine from "../../assets/svg/common/SvgTrippleLine.vue";
import SvgUser from "../../assets/svg/SvgUser.vue";
import AccountButtonComponent from "../common/AccountButtonComponent.vue";

const modalStore = useModalStore();
const onClickOpenModal = () => {
  modalStore.showModal("contactUs");
};

const windowWidth = ref(window.innerWidth);

onMounted(() => window.addEventListener("resize", handleResize));
onUnmounted(() => window.removeEventListener("resize", handleResize));

const handleResize = () => {
  windowWidth.value = window.innerWidth;
};
const onAccountLogin = () => {
  modalStore.showModal("loginModal");
};
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
      <div class="landing__full-screen__header__rightside">
        <span
          class="landing__full-screen__header__account"
          @click="onAccountLogin"
        >
          <account-button-component
            picture="/src/assets/img/test_ladislav.jpg"
          />
        </span>
        <span class="landing__full-screen__header__lang">
          <lang-component />
        </span>
      </div>
    </div>
    <div class="landing__full-screen__text">
      <div class="landing__full-screen__title" v-tooltip="'jkferjfr'">
        {{ $t("full-screen.header") }}
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
      <button-component
        @press="onClickOpenModal"
        title="I have a project to make!"
      >
        <template #after-title> > </template>
      </button-component>
    </div>
  </div>
</template>
