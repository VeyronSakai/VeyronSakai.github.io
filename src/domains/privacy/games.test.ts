import {privacyGames} from "@/domains/privacy/games";
import {contentSlugs, getPrivacyBody} from "@/domains/privacy/privacyContent";

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

    it("ships non-empty ja and en markdown for every game", () => {
        for (const slug of slugs) {
            for (const language of ["ja", "en"] as const) {
                const body = getPrivacyBody(slug, language);
                expect(body, `${slug}:${language} markdown`).toBeTruthy();
                expect((body ?? "").trim().length).toBeGreaterThan(0);
            }
        }
    });

    it("has no orphan content folder without a registry entry", () => {
        for (const slug of contentSlugs) {
            expect(slugs, `orphan content slug: ${slug}`).toContain(slug);
        }
    });
});
