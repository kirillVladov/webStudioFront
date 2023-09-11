import LandingView from "../views/LandingView.vue";
import ProfileView from "../views/ProfileView.vue";
import TasksView from "../views/TasksView.vue";
import PeoplesView from "../views/PeoplesView.vue";
import ChatView from "../views/ChatView.vue";
import ActionsView from "../views/ActionsView.vue";
import ProjectsView from "../views/ProjectsView.vue";

export default [
  {
    path: "/",
    name: "landing",
    component: LandingView,
  },
  {
    path: "/profile",
    name: "profile",
    component: ProfileView,
  },
  {
    path: "/projects",
    name: "projects",
    component: ProjectsView,
  },
  {
    path: "/tasks",
    name: "tasks",
    component: TasksView,
  },
  {
    path: "/peoples",
    name: "peoples",
    component: PeoplesView,
  },
  {
    path: "/chat",
    name: "chat",
    component: ChatView,
  },
  {
    path: "/actions",
    name: "actions",
    component: ActionsView,
  },
];
