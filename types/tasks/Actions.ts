import { Profile } from "../common/user";

export interface Action {
  actionId: string;
  userId: string;
  taskId: string;
  user: Profile;
}
