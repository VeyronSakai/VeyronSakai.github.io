import type {Language} from "@/domains/i18n/translations";

// ブラウザの言語設定を参照し、日本語なら "ja"、それ以外なら "en" を返す。
export const detectLanguage = (): Language => {
    const browserLang = navigator.language;
    return browserLang.startsWith("ja") ? "ja" : "en";
};
