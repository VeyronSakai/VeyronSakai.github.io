// サイトが対応する言語。公開しているゲームが対応する言語にそろえる。並びは言語の切り替えに出す順。
export const languages = ["ja", "en", "zh-Hans", "zh-Hant", "ko", "fr", "de", "es", "it", "pt-BR"] as const;

export type Language = (typeof languages)[number];

// 言語の切り替えに出す名前。どの言語で表示していても、その言語自身の書き方で出す。
export const languageNames: Record<Language, string> = {
    ja: "日本語",
    en: "English",
    "zh-Hans": "简体中文",
    "zh-Hant": "繁體中文",
    ko: "한국어",
    fr: "Français",
    de: "Deutsch",
    es: "Español",
    it: "Italiano",
    "pt-BR": "Português (Brasil)",
};

// 言語ごとの表示文言テーブル。language 切替で参照先を入れ替える。
export type Translations = {
    header: {
        languageLabel: string;
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
    letsPlay: {
        title: string;
    };
};

export const translations: Record<Language, Translations> = {
    ja: {
        header: {
            languageLabel: "言語",
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
        letsPlay: {
            title: "ゲーム実況・配信のガイドライン",
        },
    },
    en: {
        header: {
            languageLabel: "Language",
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
        letsPlay: {
            title: "Let's Play and Streaming Guidelines",
        },
    },
    "zh-Hans": {
        header: {
            languageLabel: "语言",
        },
        hero: {
            name: "Yuki Sakai",
            role: "软件工程师",
        },
        profile: {
            location: "日本",
            gender: "男",
        },
        privacy: {
            lastUpdatedLabel: "最后更新",
            notFoundTitle: "找不到页面",
            notFoundBody: "您要找的隐私政策不存在或已移动。",
            homeLink: "返回首页",
        },
        letsPlay: {
            title: "游戏实况与直播指南",
        },
    },
    "zh-Hant": {
        header: {
            languageLabel: "語言",
        },
        hero: {
            name: "Yuki Sakai",
            role: "軟體工程師",
        },
        profile: {
            location: "日本",
            gender: "男",
        },
        privacy: {
            lastUpdatedLabel: "最後更新",
            notFoundTitle: "找不到頁面",
            notFoundBody: "您要找的隱私權政策不存在或已移動。",
            homeLink: "回到首頁",
        },
        letsPlay: {
            title: "遊戲實況與直播指南",
        },
    },
    ko: {
        header: {
            languageLabel: "언어",
        },
        hero: {
            name: "Yuki Sakai",
            role: "소프트웨어 엔지니어",
        },
        profile: {
            location: "일본",
            gender: "남성",
        },
        privacy: {
            lastUpdatedLabel: "최종 업데이트",
            notFoundTitle: "페이지를 찾을 수 없습니다",
            notFoundBody: "찾으시는 개인정보 처리방침이 존재하지 않거나 이동되었습니다.",
            homeLink: "홈으로",
        },
        letsPlay: {
            title: "게임 실황·방송 가이드라인",
        },
    },
    fr: {
        header: {
            languageLabel: "Langue",
        },
        hero: {
            name: "Yuki Sakai",
            role: "Ingénieur logiciel",
        },
        profile: {
            location: "Japon",
            gender: "Homme",
        },
        privacy: {
            lastUpdatedLabel: "Dernière mise à jour",
            notFoundTitle: "Page introuvable",
            notFoundBody: "La politique de confidentialité que vous cherchez n'existe pas ou a été déplacée.",
            homeLink: "Accueil",
        },
        letsPlay: {
            title: "Lignes directrices pour les let's play et les streams",
        },
    },
    de: {
        header: {
            languageLabel: "Sprache",
        },
        hero: {
            name: "Yuki Sakai",
            role: "Softwareentwickler",
        },
        profile: {
            location: "Japan",
            gender: "Männlich",
        },
        privacy: {
            lastUpdatedLabel: "Zuletzt aktualisiert",
            notFoundTitle: "Seite nicht gefunden",
            notFoundBody: "Die gesuchte Datenschutzerklärung existiert nicht oder wurde verschoben.",
            homeLink: "Startseite",
        },
        letsPlay: {
            title: "Richtlinien für Let's Plays und Streams",
        },
    },
    es: {
        header: {
            languageLabel: "Idioma",
        },
        hero: {
            name: "Yuki Sakai",
            role: "Ingeniero de software",
        },
        profile: {
            location: "Japón",
            gender: "Hombre",
        },
        privacy: {
            lastUpdatedLabel: "Última actualización",
            notFoundTitle: "Página no encontrada",
            notFoundBody: "La política de privacidad que buscas no existe o se ha movido.",
            homeLink: "Inicio",
        },
        letsPlay: {
            title: "Directrices para gameplays y directos",
        },
    },
    it: {
        header: {
            languageLabel: "Lingua",
        },
        hero: {
            name: "Yuki Sakai",
            role: "Ingegnere del software",
        },
        profile: {
            location: "Giappone",
            gender: "Uomo",
        },
        privacy: {
            lastUpdatedLabel: "Ultimo aggiornamento",
            notFoundTitle: "Pagina non trovata",
            notFoundBody: "L'informativa sulla privacy che stai cercando non esiste o è stata spostata.",
            homeLink: "Home",
        },
        letsPlay: {
            title: "Linee guida per let's play e dirette",
        },
    },
    "pt-BR": {
        header: {
            languageLabel: "Idioma",
        },
        hero: {
            name: "Yuki Sakai",
            role: "Engenheiro de software",
        },
        profile: {
            location: "Japão",
            gender: "Masculino",
        },
        privacy: {
            lastUpdatedLabel: "Última atualização",
            notFoundTitle: "Página não encontrada",
            notFoundBody: "A política de privacidade que você procura não existe ou foi movida.",
            homeLink: "Início",
        },
        letsPlay: {
            title: "Diretrizes para gameplays e lives",
        },
    },
};
