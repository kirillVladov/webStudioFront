import { defineStore, StateTree } from "pinia";
import {
  AuthRequest,
  ChangePasswordRequest,
  Profile,
  RegistrationRequest,
  UserRole,
} from "../../../types/common/user";
import api from "../../services/api/api";
import { useRouter } from "vue-router";
import { isEqual } from "lodash";

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
    async updateProfile(): Promise<void> {
      api.updateProfile().then((response) => {
        if (!isEqual(this.profile, response)) {
          this.profile = response;
        }
      });
    },
    async logOut(): Promise<void> {
      await this.$router.push({ name: "landing" });

      this.$patch((state) => {
        state.profile = null;
      });
    },
    async registration(profile: RegistrationRequest): Promise<boolean> {
      const response = await api.registration(profile);

      if ("error" in response) return false;

      this.profile = response;

      this.$router.push({ name: "profile" });

      return true;
    },
    async auth(profile: AuthRequest): Promise<boolean> {
      const response = await api.auth(profile);

      if ("error" in response) return false;

      this.profile = response;

      return true;
    },
    async patchProfile(profile: Profile): Promise<void> {
      await api.patchProfile(profile).then((response: Profile) => {
        this.profile = response;
      });
    },
    async changePassword(data: ChangePasswordRequest): Promise<Profile> {
      return await api.changePassword(data);
    },
    async updateAllUsers(page = 1): Promise<void> {
      if (page === 1) this.users = [];

      await api.updateAllUsers(page).then((response: Profile[]) => {
        this.users = response;
      });
    },
    async updateWorkers() {},
  },
  getters: {
    getProfile: (state): Profile | null => state.profile,
    getUserRole: (state): UserRole => state.profile?.role,
    getAllUsers: (state): Profile[] => state.users,
    getToken: (state): string => state.profile?.token ?? "",
  },
  persist: {
    paths: ["profile"],
  },
});
