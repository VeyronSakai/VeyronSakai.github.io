import type {Language} from "@/domains/i18n/translations";

// プライバシーポリシーを公開するゲーム1件のメタ情報。
// slug は URL セグメント兼 src/content/privacy/<slug>/ フォルダ名と一致させる。
export type PrivacyGame = {
    slug: string;
    // ポリシーを置いた言語ごとのゲームの名前。名前のある言語と、src/content/privacy/<slug>/<言語>.md のある言語をそろえる。
    // 英語は必ず置く。名前の無い言語でサイトを見ると、英語のポリシーを出す。
    title: Partial<Record<Language, string>> & {en: string};
    lastUpdated: string; // ISO 形式 "YYYY-MM-DD"
};

// ゲームを追加するときはここに1エントリ足し、
// src/content/privacy/<slug>/<言語>.md を、ゲームが対応する言語ごとに作成するだけでよい。
export const privacyGames: PrivacyGame[] = [
    {
        slug: "tap-hunt",
        title: {ja: "Tap Hunt", en: "Tap Hunt"},
        lastUpdated: "2026-11-16",
    },
    {
        slug: "red-frontier",
        title: {
            ja: "RED FRONTIER",
            en: "RED FRONTIER",
            "zh-Hans": "RED FRONTIER",
            "zh-Hant": "RED FRONTIER",
            ko: "RED FRONTIER",
            fr: "RED FRONTIER",
            de: "RED FRONTIER",
            es: "RED FRONTIER",
            it: "RED FRONTIER",
            "pt-BR": "RED FRONTIER",
        },
        lastUpdated: "2026-11-16",
    },
    {
        slug: "past-the-last-train",
        title: {
            ja: "終電の先",
            en: "Past the Last Train",
            "zh-Hans": "末班车之后",
            "zh-Hant": "末班車之後",
            ko: "막차 너머",
            fr: "Au-delà du dernier train",
            de: "Nach dem letzten Zug",
            es: "Más allá del último tren",
            it: "Oltre l'ultimo treno",
            "pt-BR": "Depois do Último Trem",
        },
        lastUpdated: "2026-11-16",
    },
    {
        slug: "the-last-cup",
        title: {
            ja: "最後の一杯",
            en: "The Last Cup",
            "zh-Hans": "最后一杯",
            "zh-Hant": "最後一杯",
            ko: "마지막 한 잔",
            fr: "Le Dernier Café",
            de: "Die letzte Tasse",
            es: "El último café",
            it: "L'ultimo caffè",
            "pt-BR": "A Última Xícara",
        },
        lastUpdated: "2026-11-16",
    },
    {
        slug: "escape-from-the-cats-atelier",
        title: {
            ja: "猫のアトリエ",
            en: "The Cat's Atelier",
            "zh-Hans": "猫咪画室",
            "zh-Hant": "貓咪畫室",
            ko: "고양이 아틀리에",
            fr: "Atelier du chat",
            de: "Das Katzenatelier",
            es: "Taller del gato",
            it: "Atelier del gatto",
            "pt-BR": "O ateliê do gato",
        },
        lastUpdated: "2026-11-24",
    },
];

// slug から該当ゲームを引く。未登録なら undefined。
export const findPrivacyGame = (slug: string): PrivacyGame | undefined =>
    privacyGames.find((game) => game.slug === slug);
