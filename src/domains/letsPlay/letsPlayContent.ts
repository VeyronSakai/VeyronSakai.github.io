import type {Language} from "@/domains/i18n/translations";

// ゲーム実況・配信のガイドラインを最後に変えた日。ISO 形式 "YYYY-MM-DD"。
export const letsPlayLastUpdated = "2026-11-16";

// src/content/lets-play/<lang>.md をビルド時に文字列として取り込む。
// eager + ?raw のため実行時 fetch は発生せず、直アクセスでも確実にレンダリングできる。
const modules = import.meta.glob("../../content/lets-play/*.md", {
    query: "?raw",
    import: "default",
    eager: true,
}) as Record<string, string>;

// 言語をキーに本文を保持する。
const bodies = new Map<string, string>();
for (const [path, raw] of Object.entries(modules)) {
    const matched = path.match(/\/content\/lets-play\/([^/]+)\.md$/);
    if (matched) {
        bodies.set(matched[1], raw);
    }
}

// 整合性テスト用に、Markdown が存在する言語を公開する。
export const letsPlayContentLanguages = [...bodies.keys()];

export const getLetsPlayBody = (language: Language): string | undefined => bodies.get(language);
