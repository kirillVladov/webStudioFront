<script lang="ts" setup>
import ModalWindowComponent from "../ModalWindowComponent.vue";
import { computed, ComputedRef, Ref, ref } from "vue";
import LoginModel from "../../../mocks/landing/LoginModel";
import RefgistrationModel from "../../../mocks/landing/RefgistrationModel";
import ButtonComponent from "../ButtonComponent.vue";
import { useRouter } from "vue-router";
import { useModalStore } from "../../../stores/modal";

const router = useRouter();
const modalStore = useModalStore();
const isLogin: Ref<boolean> = ref(true);
const onSwitchType = () => {
  isLogin.value = !isLogin.value;
};

const modelComputed: ComputedRef<any> = computed(() =>
  isLogin.value ? LoginModel.value : RefgistrationModel.value
);

const onSubmit = () => {
  modalStore.hideModal("loginModal");

  if (isLogin.value) {
    router.push({ name: "profile" });
    return;
  }

  console.log("submit");
};
</script>

<template>
  <modal-window-component
    name="loginModal"
    :class="isLogin ? 'login' : 'register'"
    class="login-modal"
  >
    <div
      v-for="item in modelComputed"
      :key="`login-model-${item.key}`"
      :class="`login-modal-field login-modal-field-${item.key}`"
    >
      <div :class="`login-modal-field-${item.key}-title`">
        {{ item.name }}
      </div>
      <div :class="`login-modal-field-${item.key}-field`">
        <component
          :list="
            item.component.__name === 'DropdownComponent' ? item?.list : []
          "
          :class-white="item.component.__name === 'DropdownComponent'"
          :is="item.component"
        />
      </div>
    </div>
    <div class="login-modal-type-switch pointer" @click="onSwitchType">
      {{ isLogin ? "register" : "login" }}
    </div>
    <div class="login-modal-submit">
      <button-component title="Submit" @click="onSubmit" />
    </div>
  </modal-window-component>
</template>

<style lang="scss">
@import "@/style/common/modals/login-modal";
</style>
