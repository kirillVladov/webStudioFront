import { computed } from "vue";
import InputFieldComponent from "../../components/common/InputFieldComponent.vue";
import DropdownComponent from "../../components/common/DropdownComponent.vue";

export default computed(() => [
  {
    name: "You're role",
    key: "role",
    component: DropdownComponent,
    list: [
      { name: "Employer", value: "employer" },
      { name: "Worker", value: "worker" },
    ],
  },
  {
    name: "Name",
    key: "name",
    component: InputFieldComponent,
  },
  {
    name: "Surname",
    key: "surname",
    component: InputFieldComponent,
  },
  {
    name: "Phone number",
    key: "phoneNumber",
    component: InputFieldComponent,
  },
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
