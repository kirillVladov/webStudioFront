import { defineStore, StateTree } from "pinia";
import { Profile } from "../../../types/common/user";
import api from "../../services/api/api";

interface State extends StateTree {
  profile: Profile | null;
  users: Profile[];
}

// @ts-ignore
export const useUserStroe = defineStore("user-store", {
  state: (): State => ({
    profile: null,
    users: [],
  }),
  actions: {
    async updateProfile(): Promise<Profile> {
      return await api.updateProfile();
    },
    async registration(profile: Profile): Promise<void> {
      await api.registration(profile).then((response: Profile) => {
        this.profile = response;
      });
    },
    async auth(profile: Profile): Promise<void> {
      await api.auth(profile).then((response: Profile) => {
        this.profile = response;
      });
    },
    async updateAllUsers(): Promise<void> {
      await api.updateAllUsers().then((response: Profile[]) => {
        this.users = response;
      });
    },
  },
  getters: {
    getProfile: (state): Profile => state.profile,
    getAllUsers: (state): Profile[] => state.users,
  },
  persist: {
    paths: ["profile"],
  },
});
