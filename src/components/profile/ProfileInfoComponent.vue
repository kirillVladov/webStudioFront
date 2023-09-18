<script lang="ts" setup>
import { Profile } from "../../../types/common/user";
import InputFieldComponent from "../common/InputFieldComponent.vue";
import { ref, toRef } from "vue";
import ButtonComponent from "../common/ButtonComponent.vue";
import WhiteRabbitFontComponent from "../common/WhiteRabbitFontComponent.vue";
import SectionHeaderComponent from "../common/SectionHeaderComponent.vue";
import { Dropdown } from "floating-vue";
import DropdownComponent from "../common/DropdownComponent.vue";
import { useUserStroe } from "../../stores/user";
import { changePassword } from "../../services/api/requests/user";

const props = defineProps({
  user: {
    type: Object as () => Profile,
    required: true,
  },
});
const user = toRef(props, "user");
const userStore = useUserStroe();

const onUpdate = () => {
  userStore.patchProfile(userStore.profile);
};

const changePasswordModel = ref({
  oldPassword: "",
  password: "",
  confirmPassword: "",
});

const onChangePassword = (): undefined => {
  const isValid: boolean =
    changePasswordModel.value.confirmPassword !==
      changePasswordModel.value.password ||
    changePasswordModel.value.oldPassword ===
      changePasswordModel.value.password;

  if (isValid) return;

  userStore.changePassword({
    oldPassword: changePasswordModel.value.oldPassword,
    password: changePasswordModel.value.password,
  });
};
</script>

<template>
  <div class="profile-info">
    <section-header-component class="profile-info__header">
      <white-rabbit-font-component>
        Profile information
      </white-rabbit-font-component>
    </section-header-component>
    <div class="profile-info__fields">
      <div class="profile-info__name">
        <span class="profile-info__title"> Name </span>
        <span class="profile-info__field">
          <input-field-component v-model="user.name" />
        </span>
      </div>
      <div class="profile-info__surname">
        <span class="profile-info__title"> Surname </span>
        <span class="profile-info__field">
          <input-field-component v-model="user.surname" />
        </span>
      </div>
      <div class="profile-info__email">
        <span class="profile-info__title"> Email </span>
        <span class="profile-info__field">
          <input-field-component v-model="user.email" />
        </span>
      </div>
      <div class="profile-info__phone">
        <span class="profile-info__title"> Phone number </span>
        <span class="profile-info__field">
          <input-field-component v-model="user.phoneNumber" />
        </span>
      </div>
      <div class="profile-info__role">
        <span class="profile-info__title"> Role </span>
        <span class="profile-info__field">
          <dropdown-component
            :selected-item="{ name: user.role, value: '' }"
            class-white
            :list="[]"
          />
        </span>
      </div>
    </div>
    <div class="profile-info__submit">
      <button-component @click="onUpdate" title="Update" />
    </div>
    <section-header-component class="profile-info__header">
      <white-rabbit-font-component>
        Change password
      </white-rabbit-font-component>
    </section-header-component>
    <div class="profile-info__fields">
      <div class="profile-info__name">
        <span class="profile-info__title"> Current password </span>
        <span class="profile-info__field">
          <input-field-component
            type="password"
            v-model="changePasswordModel.oldPassword"
          />
        </span>
      </div>
      <div class="profile-info__name">
        <span class="profile-info__title"> New password </span>
        <span class="profile-info__field">
          <input-field-component
            type="password"
            v-model="changePasswordModel.password"
          />
        </span>
      </div>
      <div class="profile-info__name">
        <span class="profile-info__title"> Repeat new password </span>
        <span class="profile-info__field">
          <input-field-component
            type="password"
            v-model="changePasswordModel.confirmPassword"
          />
        </span>
      </div>
    </div>
    <div class="profile-info__submit">
      <button-component @click="onChangePassword" title="Change password" />
    </div>
  </div>
</template>
