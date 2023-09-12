import { defineStore, StateTree } from "pinia";
import { Action } from "../../../types/tasks/Actions";
import api from "../../services/api/api";

interface State extends StateTree {
  actions: Action[];
}

export const useActionStore = defineStore("action-store", {
  state: () => ({
    actions: [],
  }),
  actions: {
    async updateActionsList() {
      await api.updateActionsList();
    },
    async addAction(data: Action) {
      await api.addAction(data);
    },
    async deleteAction(actionId: string) {
      await api.deleteAction(actionId);
    },
  },
  getters: {
    getActionsList: (state): Action[] => state.actions,
  },
});
