<script lang="ts" setup>
import ModalWindowComponent from "../ModalWindowComponent.vue";
import { computed, ComputedRef, Ref, ref } from "vue";
import LoginModel from "../../../mocks/landing/LoginModel";
import RefgistrationModel from "../../../mocks/landing/RefgistrationModel";
import ButtonComponent from "../ButtonComponent.vue";
import { useRouter } from "vue-router";
import { useModalStore } from "../../../stores/modal";
import { useUserStroe } from "../../../stores/user";
import {
  AuthRequest,
  RegistrationRequest,
} from "../../../../types/common/user";

const router = useRouter();
const modalStore = useModalStore();
const userStore = useUserStroe();
const isLogin: Ref<boolean> = ref(true);

const model: Ref<AuthRequest | RegistrationRequest> = ref({
  email: "",
  password: "",
});

const onSwitchType = () => {
  isLogin.value = !isLogin.value;

  let newModel: RegistrationRequest | AuthRequest = {
    email: "",
    password: "",
  };

  if (!isLogin.value) {
    newModel = {
      ...newModel,
      role: "employer",
      surname: "",
      name: "",
      phoneNumber: "",
    };
  }

  model.value = newModel;
};

const modelComputed: ComputedRef<any> = computed(() =>
  isLogin.value ? LoginModel.value : RefgistrationModel.value
);

const redirectToCabinet = (isAuth: boolean) => {
  if (isAuth) {
    router.push({ name: "profile" });
  }
};

const onSubmit = async () => {
  redirectToCabinet(
    isLogin.value
      ? await userStore.auth(model.value)
      : await userStore.registration(model.value as RegistrationRequest)
  );

  modalStore.hideModal("loginModal");
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
          v-model="model[item.key]"
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
