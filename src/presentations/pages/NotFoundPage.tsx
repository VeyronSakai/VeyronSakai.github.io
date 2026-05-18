import {Link} from "react-router-dom";
import {useLanguage} from "@/use-cases/i18n/useLanguage";
import {PrivacyLayout} from "@/presentations/privacy/PrivacyLayout";

// 未知の slug やルートに対するキャッチオール。
const NotFoundPage = () => {
    const {translations} = useLanguage();

    return (
        <PrivacyLayout>
            {/* text-2xl: 文字サイズ1.5rem, font-bold: 太字, text-slate-100: 文字色 slate-100 */}
            <h1 className="text-2xl font-bold text-slate-100">
                {translations.privacy.notFoundTitle}
            </h1>
            {/* mt-4: 上マージン1rem, text-slate-300: 文字色 slate-300 */}
            <p className="mt-4 text-slate-300">
                {translations.privacy.notFoundBody}
            </p>
            {/* mt-8: 上マージン2rem, inline-block, text-indigo-400: 文字色 indigo-400, hover:underline: ホバー時下線 */}
            <Link
                to="/"
                className="mt-8 inline-block text-indigo-400 hover:underline"
            >
                ← {translations.privacy.homeLink}
            </Link>
        </PrivacyLayout>
    );
};

export default NotFoundPage;
