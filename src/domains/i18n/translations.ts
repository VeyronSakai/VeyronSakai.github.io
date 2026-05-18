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
    privacy: {
        lastUpdatedLabel: string;
        notFoundTitle: string;
        notFoundBody: string;
        homeLink: string;
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
        privacy: {
            lastUpdatedLabel: "最終更新日",
            notFoundTitle: "ページが見つかりません",
            notFoundBody: "お探しのプライバシーポリシーは存在しないか、移動しました。",
            homeLink: "ホームへ",
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
        privacy: {
            lastUpdatedLabel: "Last updated",
            notFoundTitle: "Page not found",
            notFoundBody: "The privacy policy you are looking for does not exist or has moved.",
            homeLink: "Home",
        },
    },
};
