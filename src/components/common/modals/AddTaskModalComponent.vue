<script lang="ts" setup>
import ModalWindowComponent from "../ModalWindowComponent.vue";
import InputFieldComponent from "../InputFieldComponent.vue";
import TextAreaComponent from "../TextAreaComponent.vue";
import { Ref, ref } from "vue";
import ButtonComponent from "../ButtonComponent.vue";
import DropdownComponent from "../DropdownComponent.vue";
import { AddTaskRequest } from "../../../../types/tasks";
import { useTasksStore } from "../../../stores/tasks";
import CurrencyList from "../../../mocks/tasks/CurrencyList";
import PriorityList from "../../../mocks/tasks/PriorityList";
import { useModalStore } from "../../../stores/modal";

const taskStore = useTasksStore();
const modalStore = useModalStore();

const model: Ref<AddTaskRequest> = ref({
  header: "",
  tags: [""],
  description: "",
  price: 0,
  priority: "low",
  currency: "usd",
  startAt: "",
  expiresAt: "",
});

const resetModel = () => {
  model.value = {
    header: "",
    tags: "",
    description: "",
    price: 0,
    priority: "low",
    currency: "usd",
    startAt: "",
    expiresAt: "",
  };
};

const onSubmit = () => {
  taskStore.addTask(model.value);
  modalStore.hideModal("addTask");
};
</script>

<template>
  <modal-window-component
    name="addTask"
    class="add-task-modal"
    @enter-key="onSubmit"
    @close="resetModel"
  >
    <div class="add-task-modal__title">test header</div>
    <div class="add-task-modal__fields">
      <div class="add-task-modal__header">
        <input-field-component v-model="model.header" placeholder="header" />
      </div>
      <div class="add-task-modal__tags">
        <input-field-component v-model="model.tags" placeholder="tags" />
      </div>
      <div class="add-task-modal__price">
        <input-field-component
          type="number"
          v-model.number="model.price"
          placeholder="price"
        />
      </div>
      <div class="add-task-modal__priority">
        <dropdown-component
          @select="
            (e) => {
              model.priority = e.value;
            }
          "
          class-white
          :selected-item="PriorityList[0]"
          :list="PriorityList"
        />
      </div>
      <div class="add-task-modal__startAt">
        <input-field-component
          type="date"
          v-model="model.startAt"
          placeholder="start at"
        />
      </div>
      <div class="add-task-modal__expireAt">
        <input-field-component
          type="date"
          v-model="model.expiresAt"
          placeholder="expires at"
        />
      </div>
      <div class="add-task-modal__currency">
        <dropdown-component
          @select="
            (e) => {
              model.currency = e.value;
            }
          "
          class-white
          :selected-item="CurrencyList[0]"
          :list="CurrencyList"
        />
      </div>
      <div class="add-task-modal__description">
        <text-area-component
          v-model="model.description"
          placeholder="description"
        />
      </div>
    </div>
    <div class="add-task-modal__submit">
      <button-component title="Submit" @click="onSubmit" />
    </div>
  </modal-window-component>
</template>
