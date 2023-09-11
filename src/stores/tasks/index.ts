import { defineStore, StateTree } from "pinia";
import api from "../../services/api/api";
import { AddTaskRequest, Task } from "../../../types/tasks";

interface State extends StateTree {
  tasksList: Task[];
}

export const useTasksStore = defineStore("tasks-store", {
  state: (): State => ({
    tasksList: [],
  }),
  actions: {
    async updateTaskList(): Promise<void> {
      await api.updateTasksList().then((response) => {
        this.tasksList = response;
      });
    },
    async addTask(data: AddTaskRequest): Promise<void> {
      await api.addTask(data);

      await this.updateTaskList();
    },
  },
  getters: {
    getTaskList: (state) => state.tasksList,
  },
});
