import {getLetsPlayBody, letsPlayLastUpdated} from "@/domains/letsPlay/letsPlayContent";
import {useLanguage} from "@/use-cases/i18n/useLanguage";

export type ResolvedLetsPlayGuidelines = {
    title: string;
    lastUpdated: string;
    body: string;
};

// 現在の言語のゲーム実況・配信のガイドラインを解決する。本文が無ければ null を返す。
export const useLetsPlayGuidelines = (): ResolvedLetsPlayGuidelines | null => {
    const {language, translations} = useLanguage();

    const body = getLetsPlayBody(language);
    if (!body) {
        return null;
    }

    return {title: translations.letsPlay.title, lastUpdated: letsPlayLastUpdated, body};
};
