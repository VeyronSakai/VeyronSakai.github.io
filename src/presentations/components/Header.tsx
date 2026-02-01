type HeaderProps = {
    logoSrc: string;
};

export const Header = ({ logoSrc }: HeaderProps) => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50">
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
                    <img src={logoSrc} alt="Logo" className="w-10 h-10 rounded-full object-cover" />
                    {/* w-10/h-10: 幅/高さ2.5rem, rounded-full: 円形, object-cover: 画像をトリミングして覆う */}
                    <nav className="flex items-center gap-8">
                        {/* flex: flexbox, items-center: 縦軸中央揃え, gap-8: 間隔2rem */}
                        <a
                            href="#japanese"
                            className="text-sm font-medium text-slate-300 hover:text-indigo-400 transition-colors duration-300"
                        >
                            {/*
                                text-sm: 文字サイズ小
                                font-medium: 中太字
                                text-slate-300: 文字色 slate-300
                                hover:text-indigo-400: ホバー時文字色 indigo-400
                                transition-colors: 色変化をアニメーション
                                duration-300: 300ms
                            */}
                            日本語
                        </a>
                        <a
                            href="#english"
                            className="text-sm font-medium text-slate-300 hover:text-indigo-400 transition-colors duration-300"
                        >
                            {/*
                                text-sm: 文字サイズ小
                                font-medium: 中太字
                                text-slate-300: 文字色 slate-300
                                hover:text-indigo-400: ホバー時文字色 indigo-400
                                transition-colors: 色変化をアニメーション
                                duration-300: 300ms
                            */}
                            English
                        </a>
                    </nav>
                </div>
            </div>
        </header>
    );
};
