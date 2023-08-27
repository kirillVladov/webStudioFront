import { computed } from "vue";
import InputFieldComponent from "../../components/common/InputFieldComponent.vue";

export default computed(() => [
  {
    name: "Email",
    key: "email",
    component: InputFieldComponent,
  },
  {
    name: "Password",
    key: "password",
    component: InputFieldComponent,
  },
]);
