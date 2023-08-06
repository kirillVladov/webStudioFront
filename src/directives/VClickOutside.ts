import type { Directive, DirectiveBinding, VNode } from "vue";

interface Instance {
  el: HTMLElement;
  binding: DirectiveBinding;
  vnode: VNode;
}

const instances: Array<Instance> = [];
const onDocumentClick = (ev: Event) => {
  if (!(ev.target instanceof Node)) {
    return;
  }
  for (let i = 0; i < instances.length; i++) {
    const inst = instances[i];
    if (!inst.el.contains(ev.target)) {
      inst.binding.value(ev, inst.el);
    }
  }
};
let listenerAdded = false;

export default <Directive>{
  mounted: (el, binding, vnode) => {
    if (!listenerAdded) {
      listenerAdded = true;
      document.addEventListener("click", onDocumentClick);
    }
    setTimeout(() => {
      instances.push({ el, binding, vnode });
    });
  },
  unmounted: function (el) {
    for (let i = 0; i < instances.length; i++) {
      if (instances[i].el === el) {
        instances.splice(i, 1);
        break;
      }
    }
  },
};
