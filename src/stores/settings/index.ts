import { defineStore, StateTree } from "pinia";
import type { LangType, ThemeType } from "../../../types/common/settings";
import { changeLocale } from "../../services/translates";

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
    setTheme: function (value: ThemeType): void {
      this.$patch((state) => {
        state.theme = value;
      });
    },
  },
  persist: true,
});
