import {useEffect} from "react";
import {useLanguage} from "@/use-cases/i18n/useLanguage";
import {useLetsPlayGuidelines} from "@/use-cases/letsPlay/useLetsPlayGuidelines";
import {PrivacyLayout} from "@/presentations/privacy/PrivacyLayout";
import {MarkdownArticle} from "@/presentations/privacy/MarkdownArticle";
import NotFoundPage from "@/presentations/pages/NotFoundPage";

// /lets-play — 全ゲーム共通のゲーム実況・配信のガイドラインを表示する。
// 文書の見た目はプライバシーポリシーとそろえるため、同じレイアウトと Markdown の描き方を使う。
const LetsPlayPage = () => {
    const {translations} = useLanguage();
    const resolved = useLetsPlayGuidelines();

    // 共有したときやブラウザのタブに出るタイトルを、ガイドラインの名前にする。
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
                    {translations.privacy.lastUpdatedLabel}: {resolved.lastUpdated}
                </p>
            </header>

            <MarkdownArticle body={resolved.body}/>
        </PrivacyLayout>
    );
};

export default LetsPlayPage;
