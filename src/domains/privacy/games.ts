import type {Language} from "@/domains/i18n/translations";

// プライバシーポリシーを公開するゲーム1件のメタ情報。
// slug は URL セグメント兼 src/content/privacy/<slug>/ フォルダ名と一致させる。
export type PrivacyGame = {
    slug: string;
    title: Record<Language, string>;
    lastUpdated: string; // ISO 形式 "YYYY-MM-DD"
};

// ゲームを追加するときはここに1エントリ足し、
// src/content/privacy/<slug>/{ja,en}.md を作成するだけでよい。
export const privacyGames: PrivacyGame[] = [
    {
        slug: "tap-hunt",
        title: {ja: "Tap Hunt", en: "Tap Hunt"},
        lastUpdated: "2026-05-18",
    },
];

// slug から該当ゲームを引く。未登録なら undefined。
export const findPrivacyGame = (slug: string): PrivacyGame | undefined =>
    privacyGames.find((game) => game.slug === slug);
