import type { ReactNode } from "react";

type SocialLinkProps = {
    href: string;
    label: string;
    children: ReactNode;
};

export const SocialLink = ({ href, label, children }: SocialLinkProps) => {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-all duration-300"
        >
            {/*
                flex: flexbox
                items-center: 縦軸中央揃え
                gap-2: 間隔0.5rem
                px-4: 左右パディング1rem
                py-2: 上下パディング0.5rem
                rounded-lg: 角丸大
                bg-slate-800: 背景色 slate-800
                hover:bg-slate-700: ホバー時背景色 slate-700
                text-slate-300: 文字色 slate-300
                hover:text-white: ホバー時文字色白
                transition-all: すべての変化をアニメーション
                duration-300: 300ms
            */}
            {children}
            <span>{label}</span>
        </a>
    );
};
