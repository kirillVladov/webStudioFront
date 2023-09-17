import $http from "../http";
import { AddTaskRequest, Task, TaskResponse } from "../../../../types/tasks";
import { SuccessResponse } from "../../../../types/common/responses";

const base = "task";
export async function addTask(data: AddTaskRequest): Promise<Task> {
  return await $http.post(base, data);
}

export async function updateTasksList(page: number): Promise<TaskResponse> {
  return await $http.get("tasks", { params: { page } });
}

export async function deleteTask(id: string): Promise<SuccessResponse> {
  return await $http.delete(`${base}/${id}`);
}
