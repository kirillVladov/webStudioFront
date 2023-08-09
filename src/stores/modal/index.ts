import {defineStore, StateTree} from "pinia";
import initialStore from "./initialStore";
import type {ModalState} from "../../../types/common/modal";

// interface State extends StateTree {
//     [key: ModalState]: boolean
// }

export const useModalStore = defineStore("modal-store", {
    state: () => (initialStore),
    actions: {
        showModal(key: ModalState) {
            this.$patch((state) => {
                state[key] = true;
            })
        },
        hideModal(key: ModalState) {
            this.$patch((state) => {
                state[key] = false;
            })
        }
    },
    getters: {
        getModalState() {
            return (key: ModalState) => {
                return this[key];
            }
        }
    }
})