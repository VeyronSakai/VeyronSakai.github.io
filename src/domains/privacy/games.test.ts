import {languages} from "@/domains/i18n/translations";
import {privacyGames} from "@/domains/privacy/games";
import {contentEntries, getPrivacyBody} from "@/domains/privacy/privacyContent";

describe("privacy games registry", () => {
    const slugs = privacyGames.map((game) => game.slug);

    it("has unique URL-safe slugs", () => {
        expect(new Set(slugs).size).toBe(slugs.length);
        for (const slug of slugs) {
            expect(slug).toMatch(/^[a-z0-9-]+$/);
        }
    });

    it("uses YYYY-MM-DD for lastUpdated", () => {
        for (const game of privacyGames) {
            expect(game.lastUpdated).toMatch(/^\d{4}-\d{2}-\d{2}$/);
            expect(Number.isNaN(Date.parse(game.lastUpdated))).toBe(false);
        }
    });

    it("ships non-empty markdown exactly for the languages that have a title", () => {
        for (const game of privacyGames) {
            for (const language of languages) {
                const body = getPrivacyBody(game.slug, language);
                const label = `${game.slug}:${language} markdown`;
                if (game.title[language]) {
                    expect(body, label).toBeTruthy();
                    expect((body ?? "").trim().length, label).toBeGreaterThan(0);
                } else {
                    expect(body, label).toBeUndefined();
                }
            }
        }
    });

    it("has no orphan content without a registry entry or a supported language", () => {
        for (const {slug, language} of contentEntries) {
            expect(slugs, `orphan content slug: ${slug}`).toContain(slug);
            expect(languages, `unsupported content language: ${slug}:${language}`).toContain(language);
        }
    });
});
