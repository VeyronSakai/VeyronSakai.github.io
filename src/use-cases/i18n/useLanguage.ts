import {useContext} from "react";
import {languageContext, type LanguageContextValue} from "@/domains/i18n/languageContexts";

export const useLanguage = (): LanguageContextValue => {
    // Context から言語状態と翻訳テーブルを取得する。
    const context = useContext(languageContext);
    if (!context) {
        throw new Error("useLanguage must be used within LanguageProvider");
    }
    return context;
};
