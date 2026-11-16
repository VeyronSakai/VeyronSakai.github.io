import {Link} from "react-router-dom";
import {useLanguage} from "@/use-cases/i18n/useLanguage";
import {languageNames, languages, type Language} from "@/domains/i18n/translations";

type HeaderProps = {
    logoSrc: string;
};

export const Header = ({logoSrc}: HeaderProps) => {
    // 現在の言語と翻訳テーブルを取得。言語が変わると再描画される。
    const {language, setLanguage, translations} = useLanguage();

    return (
        <header
            className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50">
            {/*
                fixed: 画面固定
                top-0/left-0/right-0: 端に固定
                z-50: 重なり順50
                bg-slate-900/80: 背景色 slate-900 80%不透明
                backdrop-blur-md: 背景ぼかし中
                border-b: 下線
                border-slate-700/50: 枠線色 slate-700 50%不透明
            */}
            <div className="max-w-full mx-auto px-6 py-4">
                {/* max-w-full: 最大幅100%, mx-auto: 中央寄せ, px-6: 左右パディング1.5rem, py-4: 上下パディング1rem */}
                <div className="flex items-center justify-between">
                    {/* flex: flexbox, items-center: 縦軸中央揃え, justify-between: 両端揃え */}
                    {/* ロゴクリックでトップへ戻る */}
                    <Link to="/" aria-label="Home">
                        <img src={logoSrc} alt="Logo" className="w-10 h-10 rounded-full object-cover"/>
                        {/* w-10/h-10: 幅/高さ2.5rem, rounded-full: 円形, object-cover: 画像をトリミングして覆う */}
                    </Link>
                    {/* 言語が多く横に並べきれないので、選択肢から選ばせる。選択肢は languages の順で、その言語自身の名前で出す。 */}
                    <select
                        value={language}
                        onChange={(event) => setLanguage(event.target.value as Language)}
                        aria-label={translations.header.languageLabel}
                        className="rounded-md border border-slate-700 bg-slate-800 px-3 py-1.5 text-sm font-medium text-slate-200 transition-colors duration-300 hover:border-indigo-400 focus:border-indigo-400 focus:outline-none"
                    >
                        {/*
                            rounded-md: 角丸中
                            border: 枠線
                            border-slate-700: 枠線色 slate-700
                            bg-slate-800: 背景色 slate-800
                            px-3: 左右パディング0.75rem
                            py-1.5: 上下パディング0.375rem
                            text-sm: 文字サイズ小
                            font-medium: 中太字
                            text-slate-200: 文字色 slate-200
                            transition-colors: 色変化をアニメーション
                            duration-300: 300ms
                            hover:border-indigo-400: ホバー時枠線色 indigo-400
                            focus:border-indigo-400: フォーカス時枠線色 indigo-400
                            focus:outline-none: フォーカス時の既定の枠を消す
                        */}
                        {languages.map((option) => (
                            <option key={option} value={option} lang={option}>
                                {languageNames[option]}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </header>
    );
};
