import $http from "../http";
import { Action } from "../../../../types/tasks/Actions";
import { ActionTab, SubmitActionResponse } from "../../../../types/actions";
import { SuccessResponse } from "../../../../types/common/responses";

const base = "/actions";
export async function updateActionsList(status?: ActionTab) {
  return await $http.get(`${base}/list`, { params: { status } });
}

export async function addAction(data: SubmitActionResponse) {
  return await $http.post(base, data);
}

export async function deleteAction(actionId: string): Promise<SuccessResponse> {
  return await $http.delete(base, { params: { id: actionId } });
}
