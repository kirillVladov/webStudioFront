<script lang="ts" setup>
import TasksItemComponent from "../components/tasks/TasksItemComponent.vue";
import { useModalStore } from "../stores/modal";
import AddTaskModalComponent from "../components/common/modals/AddTaskModalComponent.vue";
import { useTasksStore } from "../stores/tasks";
import { onBeforeMount, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useUserStroe } from "../stores/user";
import TaskDetail from "./TaskDetail.vue";

const taskStore = useTasksStore();
const userStore = useUserStroe();
const modalStore = useModalStore();
const router = useRouter();
const route = useRoute();

const currentPage = ref(1);

onBeforeMount(() => {
  taskStore.updateTaskList(currentPage.value);
});

const onAddTask = () => {
  modalStore.showModal("addTask");
};

const onDelete = (id: string) => {
  taskStore.deleteTask(id);
};

const onOpenTask = (id: string) => {
  router.push({ name: "task-detail", params: { id } });
};

const onEditTask = (id: string) => {
  console.log(id + " deleted");
};
</script>

<template>
  <template v-if="route.params?.id">
    <task-detail />
  </template>
  <div class="tasks" v-else>
    <div
      class="tasks__add pointer"
      v-if="userStore.getUserRole === 'employer'"
      @click="onAddTask"
    >
      + add task
    </div>
    <div class="tasks__header">filter</div>
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
