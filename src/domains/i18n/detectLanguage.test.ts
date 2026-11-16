import {detectLanguage, toLanguage} from "@/domains/i18n/detectLanguage";

describe("toLanguage", () => {
    it.each([
        ["ja-JP", "ja"],
        ["en-GB", "en"],
        ["ko-KR", "ko"],
        ["fr-CA", "fr"],
        ["de-AT", "de"],
        ["es-MX", "es"],
        ["it-IT", "it"],
        ["pt-PT", "pt-BR"],
        ["pt-BR", "pt-BR"],
        ["zh-CN", "zh-Hans"],
        ["zh", "zh-Hans"],
        ["zh-TW", "zh-Hant"],
        ["zh-HK", "zh-Hant"],
        ["zh-Hant", "zh-Hant"],
        ["zh-Hans-HK", "zh-Hans"],
    ])("maps %s to %s", (tag, expected) => {
        expect(toLanguage(tag)).toBe(expected);
    });

    it("returns undefined for an unsupported language", () => {
        expect(toLanguage("ru-RU")).toBeUndefined();
    });
});

describe("detectLanguage", () => {
    const mockLanguages = (tags: string[]) => {
        vi.spyOn(navigator, "languages", "get").mockReturnValue(tags);
    };

    afterEach(() => {
        vi.restoreAllMocks();
    });

    it("picks the first supported language in the browser's order", () => {
        mockLanguages(["ru-RU", "ko-KR", "ja-JP"]);
        expect(detectLanguage()).toBe("ko");
    });

    it("falls back to English when no language is supported", () => {
        mockLanguages(["ru-RU", "ar"]);
        expect(detectLanguage()).toBe("en");
    });
});
