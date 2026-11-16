import {languages, type Language} from "@/domains/i18n/translations";

// 繁体字を使う地域。中国語は、書き方の指定（Hans / Hant）が無ければ地域で簡体字と繁体字を分ける。
const traditionalChineseRegions = ["tw", "hk", "mo"];

// 言語タグ（"zh-TW"・"pt-PT" など）を、サイトが対応する言語に当てはめる。当てはまらなければ undefined。
export const toLanguage = (tag: string): Language | undefined => {
    const [primary, ...subtags] = tag.toLowerCase().split("-");
    if (primary === "zh") {
        if (subtags.includes("hant")) {
            return "zh-Hant";
        }
        if (subtags.includes("hans")) {
            return "zh-Hans";
        }
        return subtags.some((subtag) => traditionalChineseRegions.includes(subtag)) ? "zh-Hant" : "zh-Hans";
    }
    // ポルトガル語はブラジルの言い方でしか書いていないので、地域を問わずそれを出す。
    if (primary === "pt") {
        return "pt-BR";
    }
    return languages.find((language) => language === primary);
};

// ブラウザの言語設定を優先順に見て、最初に対応する言語を返す。どれにも当てはまらなければ英語にする。
export const detectLanguage = (): Language => {
    for (const tag of navigator.languages) {
        const language = toLanguage(tag);
        if (language) {
            return language;
        }
    }
    return "en";
};
