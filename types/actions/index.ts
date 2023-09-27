export type ActionTab =
  | ""
  | ActionStatus.declined
  | ActionStatus.allowed
  | ActionStatus.awaiting;

export type ActionTabValue = { name: string; value: ActionTab };
export enum ActionStatus {
  declined = "declined",
  allowed = "allowed",
  awaiting = "awaiting",
}

export interface SubmitActionResponse {
  userId: string;
  taskId: string;
  expirationDate: string;
  status: ActionStatus;
}
