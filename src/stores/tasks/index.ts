import { defineStore, StateTree } from "pinia";
import api from "../../services/api/api";
import { AddTaskRequest, Task } from "../../../types/tasks";

interface State extends StateTree {
  tasksList: Task[];
  totalItems: number;
  lastPage: number;
}

export const useTasksStore = defineStore("tasks-store", {
  state: (): State => ({
    tasksList: [],
    totalItems: 0,
    lastPage: 0,
  }),
  actions: {
    async updateTaskList(page: number): Promise<void> {
      await api.updateTasksList(page).then((response) => {
        this.tasksList = response.data;
        this.lastPage = response.lastPage;
      });
    },
    async addTask(data: AddTaskRequest): Promise<void> {
      await api.addTask(data);

      await this.updateTaskList(1);
    },
    async deleteTask(id: string): Promise<void> {
      const response = await api.deleteTask(id);

      if (response?.success === "ok") {
        const taskIndex = this.tasksList.findIndex(
          (task: Task) => task.taskId == id
        );

        this.tasksList.splice(taskIndex, 1);
      }
    },
    async updateTask(id: string) {
      return await api.updateTask(id);
    },
  },
  getters: {
    getTaskList: (state) => state.tasksList,
  },
});
