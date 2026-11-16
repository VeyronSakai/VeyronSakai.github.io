import {useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import {useLanguage} from "@/use-cases/i18n/useLanguage";
import {usePrivacyGame} from "@/use-cases/privacy/usePrivacyGame";
import {PrivacyLayout} from "@/presentations/privacy/PrivacyLayout";
import {MarkdownArticle} from "@/presentations/privacy/MarkdownArticle";
import NotFoundPage from "@/presentations/pages/NotFoundPage";

// /privacy/:slug — 1ゲーム分のプライバシーポリシー本文を表示する。
const PrivacyPolicyPage = () => {
    const {slug} = useParams<{slug: string}>();
    const {translations} = useLanguage();
    const resolved = usePrivacyGame(slug);

    // ストア審査・クローラーがタイトルを読むため document.title を更新する。
    useEffect(() => {
        if (resolved) {
            document.title = resolved.title;
        }
    }, [resolved]);

    if (!resolved) {
        return <NotFoundPage/>;
    }

    return (
        <PrivacyLayout>
            {/* mb-8: 下マージン2rem, border-b: 下線, border-slate-700/50: 枠線色, pb-6: 下パディング1.5rem */}
            <header className="mb-8 border-b border-slate-700/50 pb-6">
                {/* text-3xl: 文字サイズ1.875rem, font-bold: 太字, text-slate-100: 文字色 slate-100 */}
                <h1 className="text-3xl font-bold text-slate-100">
                    {resolved.title}
                </h1>
                {/* mt-2: 上マージン0.5rem, text-sm: 文字サイズ小, text-slate-400: 文字色 slate-400 */}
                <p className="mt-2 text-sm text-slate-400">
                    {translations.privacy.lastUpdatedLabel}: {resolved.game.lastUpdated}
                </p>
            </header>

            {/* ゲームが今の言語に対応せず英語の本文を出すときに、読み上げや翻訳が本文の言語を取り違えないよう、本文の言語を示す。 */}
            <div lang={resolved.language}>
                <MarkdownArticle body={resolved.body}/>
            </div>

            {/* ストアのサポートとプライバシーのリンクがこのページを指すので、ここからガイドラインへたどれるようにする。ポリシーの本文には含めない。 */}
            {/* mt-12: 上マージン3rem, border-t: 上線, border-slate-700/50: 枠線色, pt-6: 上パディング1.5rem */}
            <footer className="mt-12 border-t border-slate-700/50 pt-6">
                {/* text-indigo-400: 文字色 indigo-400, hover:underline: ホバー時下線 */}
                <Link to="/lets-play" className="text-indigo-400 hover:underline">
                    {translations.letsPlay.title}
                </Link>
            </footer>
        </PrivacyLayout>
    );
};

export default PrivacyPolicyPage;
