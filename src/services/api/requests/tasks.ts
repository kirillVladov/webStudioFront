import $http from "../http";
import { AddTaskRequest, Task } from "../../../../types/tasks";

const base = "tasks";
export async function addTask(data: AddTaskRequest): Promise<Task> {
  return await $http.post(base, data);
}

export async function updateTasksList(): Promise<Task> {
  return await $http.get(base);
}
