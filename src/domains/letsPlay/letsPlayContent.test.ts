import {languages} from "@/domains/i18n/translations";
import {getLetsPlayBody, letsPlayContentLanguages, letsPlayLastUpdated} from "@/domains/letsPlay/letsPlayContent";

describe("let's play guidelines content", () => {
    it("ships non-empty markdown for every supported language", () => {
        for (const language of languages) {
            const body = getLetsPlayBody(language);
            expect(body, `${language} markdown`).toBeTruthy();
            expect((body ?? "").trim().length, `${language} markdown`).toBeGreaterThan(0);
        }
    });

    it("has no markdown in an unsupported language", () => {
        for (const language of letsPlayContentLanguages) {
            expect(languages, `unsupported content language: ${language}`).toContain(language);
        }
    });

    it("uses YYYY-MM-DD for the last updated date", () => {
        expect(letsPlayLastUpdated).toMatch(/^\d{4}-\d{2}-\d{2}$/);
        expect(Number.isNaN(Date.parse(letsPlayLastUpdated))).toBe(false);
    });
});
