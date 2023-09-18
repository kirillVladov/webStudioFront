import FullScreenComponent from "../../components/landing/fullScreenComponent.vue";
import ProjectsComponent from "../../components/landing/ProjectsComponent.vue";
import BenefitsComponent from "../../components/landing/BenefitsComponent.vue";
import TeamComponent from "../../components/landing/TeamComponent.vue";
import ContactUsComponent from "../../components/landing/ContactUsComponent.vue";
import ContactUsModalComponent from "../../components/common/modals/ContactUsModalComponent.vue";
import ResourcesComponent from "../../components/landing/Resources/ResourcesComponent.vue";
import PriceComponent from "../../components/landing/PriceComponent.vue";

export default [
  {
    name: "full-screen-component",
    link: "full-screen",
    component: FullScreenComponent,
  },
  {
    name: "Projects",
    link: "projects",
    component: ProjectsComponent,
  },
  {
    name: "Benefits",
    link: "benefits",
    component: BenefitsComponent,
  },
  {
    name: "Team",
    link: "team",
    component: TeamComponent,
  },
  {
    name: "Pricing",
    link: "pricing",
    component: PriceComponent,
  },
  {
    name: "Resources",
    link: "resources",
    component: ResourcesComponent,
  },
  {
    name: "Contact",
    link: "contacts",
    component: ContactUsComponent,
  },
];
