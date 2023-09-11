import { Profile } from "../common/user";

export type Currency = "eur" | "rub" | "usd";
export type Priority = "low" | "medium" | "high";
export type CurrencyList = { name: string; value: Currency }[];
export type PriorityList = { name: string; value: Priority }[];

export enum CurrencySymbol {
  eur = "€",
  usd = "$",
  rub = "₽",
}

export interface Task extends AddTaskRequest {
  userId: string;
  taskId: string;
  user: Profile;
}

export interface AddTaskRequest {
  header: string;
  price: number;
  tags: string;
  description: string;
  currency: Currency;
  startAt: string;
  priority: Priority;
  expiresAt: string;
}
