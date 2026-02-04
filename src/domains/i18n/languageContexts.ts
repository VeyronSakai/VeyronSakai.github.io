import {createContext} from "react";
import type {Dispatch, SetStateAction} from "react";
import type {Language, Translations} from "@/domains/i18n/translations.ts";

export type LanguageContextValue = {
    language: Language;
    setLanguage: Dispatch<SetStateAction<Language>>;
    translations: Translations;
};

// 言語状態と翻訳テーブルを UI 全体で共有する Context。
export const languageContext = createContext<LanguageContextValue | undefined>(undefined);
