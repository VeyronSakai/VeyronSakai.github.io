import type {ReactNode} from "react";
import {useEffect, useMemo, useState} from "react";
import {translations, type Language} from "@/domains/i18n/translations";
import {languageContext, type LanguageContextValue} from "@/domains/i18n/languageContexts";

type LanguageProviderProps = {
    children: ReactNode;
};

export const LanguageProvider = ({children}: LanguageProviderProps) => {
    // 現在の言語状態。更新すると Provider 配下が再描画される。
    const [language, setLanguage] = useState<Language>("ja");

    // HTML の lang 属性も同期してアクセシビリティ/検索向けに明示。
    useEffect(() => {
        document.documentElement.lang = language;
    }, [language]);

    // 現在の言語に対応する翻訳テーブルを Context に流す。
    const value = useMemo<LanguageContextValue>(
        () => ({
            language,
            setLanguage,
            translations: translations[language],
        }),
        [language],
    );

    return <languageContext.Provider value={value}>{children}</languageContext.Provider>;
};
