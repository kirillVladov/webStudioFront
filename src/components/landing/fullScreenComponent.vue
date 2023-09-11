<script setup lang="ts">
import LogoComponent from "../common/LogoComponent.vue";
import SocialsListComponent from "../common/SocialsListComponent.vue";
import LangComponent from "../common/LangComponent.vue";
import ButtonComponent from "../common/ButtonComponent.vue";
import WhiteRabbitFontComponent from "../common/WhiteRabbitFontComponent.vue";
import { useModalStore } from "../../stores/modal";
import { computed, onMounted, onUnmounted, ref } from "vue";
import AccountButtonComponent from "../common/AccountButtonComponent.vue";
import { useUserStroe } from "../../stores/user";
import { useRouter } from "vue-router";
import { ModelList } from "../../../types/common/Dropdown";
//@TODo
const tempMenuLogginedList = [
  {
    name: "Profile",
    value: "profile",
  },
  {
    name: "Logout",
    value: "logout",
  },
];

const tempMenuNotLogginedList = [
  {
    name: "Login",
    value: "login",
  },
];

const userLoginActionHandler = (action: ModelList) => {
  switch (action.value) {
    case "logout":
      userStore.logOut();
      break;
    case "login":
      modalStore.showModal("loginModal");
      break;
    default:
      router.push({ name: action.value as string });
      break;
  }
};
const modalStore = useModalStore();
const userStore = useUserStroe();
const router = useRouter();
const menuList = computed(() =>
  userStore.getProfile ? tempMenuLogginedList : tempMenuNotLogginedList
);
const windowWidth = ref(window.innerWidth);

onMounted(() => window.addEventListener("resize", handleResize));
onUnmounted(() => window.removeEventListener("resize", handleResize));

const handleResize = () => {
  windowWidth.value = window.innerWidth;
};
const onClickOpenModal = () => {
  modalStore.showModal("contactUs");
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
        <span class="landing__full-screen__header__account">
          <account-button-component
            use-menu
            :picture="userStore.getProfile?.avatar"
            :menu-list="menuList"
            @menu-select="userLoginActionHandler"
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
