import type {Language} from "@/domains/i18n/translations";

// src/content/privacy/<slug>/<lang>.md をビルド時に文字列として取り込む。
// eager + ?raw のため実行時 fetch は発生せず、直アクセスでも確実にレンダリングできる。
const modules = import.meta.glob("../../content/privacy/*/*.md", {
    query: "?raw",
    import: "default",
    eager: true,
}) as Record<string, string>;

// "<slug>:<lang>" をキーに本文を保持する。
const bodies = new Map<string, string>();
for (const [path, raw] of Object.entries(modules)) {
    const matched = path.match(/\/content\/privacy\/([^/]+)\/(ja|en)\.md$/);
    if (matched) {
        bodies.set(`${matched[1]}:${matched[2]}`, raw);
    }
}

// レジストリ整合性テスト用に、Markdown が存在する slug 一覧を公開する。
export const contentSlugs = new Set(
    [...bodies.keys()].map((key) => key.split(":")[0]),
);

export const getPrivacyBody = (
    slug: string,
    language: Language,
): string | undefined => bodies.get(`${slug}:${language}`);

export const hasPrivacyBody = (slug: string, language: Language): boolean =>
    bodies.has(`${slug}:${language}`);
