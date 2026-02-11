import type {ReactNode} from "react";
import {useEffect, useMemo, useState} from "react";
import {translations, type Language} from "@/domains/i18n/translations";
import {languageContext, type LanguageContextValue} from "@/domains/i18n/languageContexts";
import {detectLanguage} from "@/domains/i18n/detectLanguage";

type LanguageProviderProps = {
    children: ReactNode;
};

export const LanguageProvider = ({children}: LanguageProviderProps) => {
    // ブラウザの言語設定から初期言語を決定する。
    const [language, setLanguage] = useState<Language>(detectLanguage);

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
