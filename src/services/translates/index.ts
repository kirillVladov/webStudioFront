import { createI18n } from "vue-i18n";
import messagesRu from "./ru/index";
import messagesEn from "./en/index";
import {LangType} from "../../../types/common/settings";
// import { useSettingsStore } from "@/stores/settings";

const i18n = createI18n({
    locale: "en",
    messages: {
        ru: messagesRu,
        en: messagesEn
    },
});

export function changeLocale(locale: LangType = "en") {
    // const messages = await import(`./${locale}/index.ts`);
    i18n.global.setLocaleMessage(locale, locale === "en" ? messagesEn : messagesRu);
    i18n.global.locale = locale;
}

export default i18n;
