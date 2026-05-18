import type {ReactNode} from "react";
import icon from "@/assets/icon.png";
import {Header} from "@/presentations/components/Header";

type PrivacyLayoutProps = {
    children: ReactNode;
};

// プライバシーポリシー系ページ共通のシェル。
// 固定ヘッダー + ダーク背景 + 読みやすい幅のコンテナ。
export const PrivacyLayout = ({children}: PrivacyLayoutProps) => {
    return (
        <div className="min-h-screen bg-slate-900 text-slate-200">
            {/*
                min-h-screen: 最小高さ100vh
                bg-slate-900: 背景色 slate-900
                text-slate-200: 文字色 slate-200
            */}
            <Header logoSrc={icon}/>

            {/* pt-24: 上パディング6rem(固定ヘッダー分), pb-16: 下パディング4rem */}
            <main className="pt-24 pb-16">
                {/* max-w-3xl: 最大幅3xl(48rem)で可読性確保, mx-auto: 中央寄せ, px-6: 左右パディング1.5rem, py-12: 上下パディング3rem */}
                <article className="max-w-3xl mx-auto px-6 py-12">
                    {children}
                </article>
            </main>
        </div>
    );
};
