import {Component} from "vue";
import SvgJavaSpring from "../../assets/svg/landing/Resources/SvgJavaSpring.vue";
import SvgVue from "../../assets/svg/landing/Resources/SvgVue.vue";
import SvgReact from "../../assets/svg/landing/Resources/SvgReact.vue";
import SvgPinia from "../../assets/svg/landing/Resources/SvgPinia.vue";
import SvgRedux from "../../assets/svg/landing/Resources/SvgRedux.vue";

// type ComponentsList = "svgJavaSpring" | "svgVue" | "svgReact" | "svgPinia" | "svgRedux"

const components: {[key: string]: Component} = {
    "svgJavaSpring": SvgJavaSpring,
    "svgVue": SvgVue,
    "svgReact": SvgReact,
    "svgPinia": SvgPinia,
    "svgRedux": SvgRedux,
}

export const getComponent = (key: keyof typeof components): Component | string | null => {
    if(!components.hasOwnProperty(key)) return null;

    return components[key]
}