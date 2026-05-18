import {findPrivacyGame, type PrivacyGame} from "@/domains/privacy/games";
import {getPrivacyBody} from "@/domains/privacy/privacyContent";
import {useLanguage} from "@/use-cases/i18n/useLanguage";

export type ResolvedPrivacyGame = {
    game: PrivacyGame;
    title: string;
    body: string;
};

// route の slug と現在の言語から、表示すべきゲームと本文を解決する。
// 未登録 slug、または該当言語の本文が無い場合は null を返す。
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

    const body = getPrivacyBody(slug, language);
    if (!body) {
        return null;
    }

    return {game, title: game.title[language], body};
};
