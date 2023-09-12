import $http from "../http";
import { Action } from "../../../../types/tasks/Actions";

const base = "/actions";
export async function updateActionsList() {
  return await $http.get(`${base}/list`);
}

export async function addAction(data: Action) {
  return await $http.post(base, data);
}

export async function deleteAction(actionId: string) {
  return await $http.delete(base, { params: { id: actionId } });
}
