export type Language = "ja" | "en";

// 言語ごとの表示文言テーブル。language 切替で参照先を入れ替える。
export type Translations = {
    header: {
        japanese: string;
        english: string;
    };
    hero: {
        name: string;
        role: string;
    };
    profile: {
        location: string;
        gender: string;
    };
};

export const translations: Record<Language, Translations> = {
    ja: {
        header: {
            japanese: "日本語",
            english: "English",
        },
        hero: {
            name: "酒井 悠生",
            role: "ソフトウェアエンジニア",
        },
        profile: {
            location: "日本",
            gender: "男性",
        },
    },
    en: {
        header: {
            japanese: "日本語",
            english: "English",
        },
        hero: {
            name: "Yuki Sakai",
            role: "Software Engineer",
        },
        profile: {
            location: "Japan",
            gender: "Male",
        },
    },
};
