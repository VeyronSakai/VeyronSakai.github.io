import {findPrivacyGame, type PrivacyGame} from "@/domains/privacy/games";
import {getPrivacyBody} from "@/domains/privacy/privacyContent";
import type {Language} from "@/domains/i18n/translations";
import {useLanguage} from "@/use-cases/i18n/useLanguage";

export type ResolvedPrivacyGame = {
    game: PrivacyGame;
    // 本文の言語。ゲームが今の言語に対応していなければ、英語になる。
    language: Language;
    title: string;
    body: string;
};

// route の slug と現在の言語から、表示すべきゲームと本文を解決する。
// 未登録 slug、または本文が無い場合は null を返す。
export const usePrivacyGame = (
    slug: string | undefined,
): ResolvedPrivacyGame | null => {
    const {language} = useLanguage();

    if (!slug) {
        return null;
    }

    const game = findPrivacyGame(slug);
    if (!game) {
        return null;
    }

    // ゲームが対応しない言語でサイトを見ているときは、英語のポリシーを出す。
    const localizedTitle = game.title[language];
    const bodyLanguage = localizedTitle ? language : "en";
    const body = getPrivacyBody(slug, bodyLanguage);
    if (!body) {
        return null;
    }

    return {game, language: bodyLanguage, title: localizedTitle ?? game.title.en, body};
};
