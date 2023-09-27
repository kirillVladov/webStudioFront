import { defineStore, StateTree } from "pinia";
import { Action } from "../../../types/tasks/Actions";
import api from "../../services/api/api";
import { ActionTab, SubmitActionResponse } from "../../../types/actions";

interface State extends StateTree {
  actions: Action[];
}

export const useActionStore = defineStore("action-store", {
  state: () => ({
    actions: [],
  }),
  actions: {
    async updateActionsList(status?: ActionTab) {
      this.actions = await api.updateActionsList(status);
    },
    async addAction(data: SubmitActionResponse) {
      const response = await api.addAction(data);
      console.log(response);
    },
    async deleteAction(actionId: string) {
      const response = await api.deleteAction(actionId);

      if (response.success === "ok") {
        const actionIndex = this.actions.findIndex(
          (item) => item.actionId === actionId
        );

        this.actions.splice(actionIndex, 1);
      }
    },
  },
  getters: {
    getActionsList: (state): Action[] => state.actions,
  },
});
