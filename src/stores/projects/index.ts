import { defineStore, StateTree } from "pinia";
import { updateProjects } from "../../services/api/requests/projects";
import { ProjectItemType } from "../../../types/projects";

interface State extends StateTree {
  projectsList: ProjectItemType[];
}

export const useProjectStore = defineStore("project-store", {
  state: (): State => ({
    projectsList: [],
  }),
  actions: {
    async updateProjects(filter: string) {
      updateProjects(filter).then((response) => {
        this.projectsList = response;
      });
    },
  },
  getters: {
    getProjectList: (state): ProjectItemType[] => state.projectsList ?? [],
  },
});
