<script lang="ts" setup>
import TasksItemComponent from "../components/tasks/TasksItemComponent.vue";
import { useModalStore } from "../stores/modal";
import AddTaskModalComponent from "../components/common/modals/AddTaskModalComponent.vue";
import { useTasksStore } from "../stores/tasks";
import { onBeforeMount } from "vue";
import { useRouter } from "vue-router";

const taskStore = useTasksStore();
const modalStore = useModalStore();

const router = useRouter();

onBeforeMount(() => {
  taskStore.updateTaskList();
});

const onAddTask = () => {
  modalStore.showModal("addTask");
};

const onDelete = (id: string) => {
  console.log(id + " deleted");
};

const onOpenTask = (id: string) => {
  router.push({ name: "task-detail", params: { id } });
};

const onEditTask = (id: string) => {
  console.log(id + " deleted");
};
</script>

<template>
  <div class="tasks">
    <div class="tasks__add pointer" @click="onAddTask">+ add task</div>
    <div class="tasks__header"></div>
    <div class="tasks__list">
      <tasks-item-component
        :task-item="task"
        v-for="task in taskStore.getTaskList"
        :key="`task-item-${task.id}`"
        @open-task="onOpenTask"
        @edit="onEditTask"
        @delete="onDelete"
      />
    </div>
  </div>
  <add-task-modal-component />
</template>

<style lang="scss">
@import "@/style/tasks/index";
</style>
