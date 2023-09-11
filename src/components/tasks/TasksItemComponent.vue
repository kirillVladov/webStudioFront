<script lang="ts" setup>
import { Ref, toRef } from "vue";
import { Task } from "../../../types/tasks";
import SvgEdit from "../../assets/svg/common/SvgEdit.vue";
import SvgDelete from "../../assets/svg/common/SvgDelete.vue";
import SvgArrowDown from "../../assets/svg/common/SvgArrowDown.vue";
import { prepareCurrencyToSymbol } from "../../services/common";

const props = defineProps({
  taskItem: {
    type: Object as () => Task,
    required: true,
  },
});
const emit = defineEmits(["openTask", "edit", "delete"]);
const taskItem: Ref<Task> = toRef(props, "taskItem");
</script>

<template>
  <div class="tasks-item pointer" @click="emit('openTask', taskItem.taskId)">
    <div class="tasks-item__user">
      <div class="tasks-item__priority">
        {{ taskItem?.priority }}
      </div>
      <div class="tasks-item__username">
        {{ taskItem.user?.surname }} {{ taskItem.user?.name }}
      </div>
    </div>
    <div class="tasks-item__info">
      <div class="tasks-item__header">
        {{ taskItem.header }}
      </div>
      <div class="tasks-item__header">
        {{ taskItem.description }}
      </div>
    </div>
    <div class="tasks-item__start">
      {{ taskItem.startAt }}
    </div>
    <div class="tasks-item__start">
      {{ taskItem.startAt }}
    </div>
    <div class="tasks-item__price">
      {{ taskItem.price }} {{ prepareCurrencyToSymbol(taskItem.currency) }}
    </div>
    <div class="tasks-item__action">
      <div
        class="tasks-item__edit pointer"
        @click.prevent.stop="emit('edit', taskItem.taskId)"
      >
        <svg-edit />
      </div>
      <div
        class="tasks-item__delete pointer"
        @click.prevent.stop="emit('delete', taskItem.taskId)"
      >
        <svg-delete />
      </div>
      <!--      <div class="tasks-item__open pointer">-->
      <!--        <svg-arrow-down />-->
      <!--      </div>-->
    </div>
  </div>
</template>
