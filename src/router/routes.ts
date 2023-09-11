import LandingView from "../views/LandingView.vue";
import ProfileView from "../views/ProfileView.vue";
import TasksView from "../views/TasksView.vue";
import PeoplesView from "../views/PeoplesView.vue";
import ChatView from "../views/ChatView.vue";
import ActionsView from "../views/ActionsView.vue";
import ProjectsView from "../views/ProjectsView.vue";
import TaskDetail from "../views/TaskDetail.vue";
import ProjectDetail from "../views/ProjectDetail.vue";
import PeopleDetail from "../views/PeopleDetail.vue";

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
    children: [
      { name: "project-detail", path: ":id", component: ProjectDetail },
    ],
  },
  {
    path: "/tasks",
    name: "tasks",
    component: TasksView,
    children: [{ name: "task-detail", path: ":id", component: TaskDetail }],
  },
  {
    path: "/peoples",
    name: "peoples",
    component: PeoplesView,
    children: [{ name: "people-detail", path: ":id", component: PeopleDetail }],
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
