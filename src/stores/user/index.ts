import { defineStore, StateTree } from "pinia";
import { Profile } from "../../../types/common/user";
import api from "../../services/api/api";

interface State extends StateTree {
  profile: Profile | null;
}

// @ts-ignore
export const useUserStroe = defineStore("user-store", {
  state: (): State => ({
    profile: null,
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
  },
  persist: ["profile"],
  getters: {
    getProfile: (state) => state.profile,
  },
});
