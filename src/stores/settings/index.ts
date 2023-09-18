import { defineStore, StateTree } from "pinia";
import type { LangType, ThemeType } from "../../../types/common/settings";
import { changeLocale } from "../../services/translates";
import { nextTick } from "vue";

interface State extends StateTree {
  lang: LangType;
  theme: ThemeType;
}

// @ts-ignore
export const useSettingsStore = defineStore("settingsStore", {
  state: (): State => ({
    lang: "en",
    theme: "light",
  }),
  actions: {
    setLang(value: LangType): void {
      this.$patch((state) => {
        state.lang = value;
      });

      changeLocale(value);
    },
    switchTheme: function (): void {
      this.$patch((state) => {
        state.theme = state.theme === "light" ? "dark" : "light";
      });

      nextTick().then(() => {
        const mainBlock = document.body;

        if (this.theme === "dark") {
          mainBlock.classList.add("dark");
        } else {
          mainBlock.classList.remove("dark");
        }
      });
    },
  },
  persist: true,
});
