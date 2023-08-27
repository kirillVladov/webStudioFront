import $http from "../http";

const base = 'projects';
export function updateProjects(filter: string) {
    return $http.get(base, {params: {type: filter}})
}