<script lang="ts" setup>
import { Ref, toRef } from "vue";
import { Task } from "../../../types/tasks";
import SvgEdit from "../../assets/svg/common/SvgEdit.vue";
import SvgDelete from "../../assets/svg/common/SvgDelete.vue";
import SvgArrowDown from "../../assets/svg/common/SvgArrowDown.vue";
import { prepareCurrencyToSymbol } from "../../services/common";
import ButtonComponent from "../common/ButtonComponent.vue";
import SvgFire from "../../assets/svg/tasks/SvgFire.vue";

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
    <div class="tasks-item__info">
      <div class="tasks-item__header">
        <span class="tasks-item__name">
          {{ taskItem.header }}
        </span>
        <span
          class="tasks-item__fire"
          v-if="taskItem.priority === 'medium' || taskItem.priority === 'high'"
        >
          <svg-fire :color="taskItem.priority === 'high' ? 'red' : 'yellow'" />
        </span>
      </div>
      <div class="tasks-item__price">
        {{ taskItem.price }} {{ prepareCurrencyToSymbol(taskItem.currency) }}
      </div>
      <span class="tasks-item__date">
        {{ taskItem.startAt }} - {{ taskItem.startAt }}
      </span>
    </div>

    <div class="tasks-item__action">
      <!--      <div-->
      <!--        class="tasks-item__edit pointer"-->
      <!--        @click.prevent.stop="emit('edit', taskItem.taskId)"-->
      <!--      >-->
      <!--        <svg-edit />-->
      <!--      </div>-->
      <div
        class="tasks-item__delete pointer"
        @click.prevent.stop="emit('delete', taskItem.taskId)"
      >
        <svg-delete />
      </div>
      <div class="tasks-item__response">
        <button-component class-purple title="Откликнуться" />
      </div>
    </div>
  </div>
</template>
