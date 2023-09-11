<script lang="ts" setup>
import TasksItemComponent from "../components/tasks/TasksItemComponent.vue";
import { useModalStore } from "../stores/modal";
import AddTaskModalComponent from "../components/common/modals/AddTaskModalComponent.vue";
import { useTasksStore } from "../stores/tasks";
import { onBeforeMount } from "vue";

const taskStore = useTasksStore();

// const testTasks = [
//   {
//     id: 1,
//     avatar: "/src/assets/img/test_ladislav.jpg",
//     userName: "test",
//     startAt: "49.43.4343",
//     expiresAt: "49.43.4343",
//     header: "test task",
//     description: "test taskifslfjoweijfoeiwjfoeiwj",
//   },
//   {
//     id: 2,
//     avatar: "/src/assets/img/test_ladislav.jpg",
//     userName: "test",
//     startAt: "49.43.4343",
//     expiresAt: "49.43.4343",
//     header: "test task",
//     description: "test taskifslfjoweijfoeiwjfoeiwj",
//   },
//   {
//     id: 3,
//     avatar: "/src/assets/img/test_ladislav.jpg",
//     userName: "test",
//     startAt: "49.43.4343",
//     expiresAt: "49.43.4343",
//     header: "test task",
//     description: "test taskifslfjoweijfoeiwjfoeiwj",
//   },
// ];

const modalStore = useModalStore();

onBeforeMount(() => {
  taskStore.updateTaskList();
});

const onAddTask = () => {
  modalStore.showModal("addTask");
};
</script>

<template>
  <div class="tasks">
    <div class="tasks__add pointer" @click="onAddTask">+ add task</div>
    <div class="tasks__list">
      <tasks-item-component
        :task-item="task"
        v-for="task in taskStore.getTaskList"
        :key="`task-item-${task.id}`"
      />
    </div>
  </div>
  <add-task-modal-component />
</template>

<style lang="scss">
@import "@/style/tasks/index";
</style>
