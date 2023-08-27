import {defineStore} from "pinia";
import {updateProjects} from "../../services/api/requests/projects";

export const useProjectStore = defineStore("project-store", {
    state: () => ({
        projectsList: []
    }),
    actions: {
        async updateProjects(filter: string) {
            updateProjects(filter).then((response) => {
                this.projectsList = response;
            })
        }
    },
    getters:{
        getProjectList: (state) => state.projectsList
    }
})