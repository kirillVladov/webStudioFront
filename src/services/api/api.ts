import * as user from "./requests/user";
import * as projects from "./requests/projects";
import * as tasks from "./requests/tasks";
import * as chat from "./requests/chat";

export default { ...user, ...projects, ...tasks, ...chat };
