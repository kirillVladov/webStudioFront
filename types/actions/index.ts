export type ActionTab = "history" | "active";

export type ActionTabValue = { name: string; value: ActionTab };
export enum ActionTabType {
  history = "history",
  active = "active",
}

export enum ActionStatus {
  declined = "declined",
  allowed = "allowed",
  awaiting = "awaiting",
}
