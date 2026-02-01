import { SocialLink } from "@/presentations/components/SocialLink";

type HeroProfileProps = {
    name: string;
    role: string;
    avatarSrc: string;
    githubUrl: string;
    xUrl: string;
};

export const HeroProfile = ({ name, role, avatarSrc, githubUrl, xUrl }: HeroProfileProps) => {
    return (
        <div className="flex w-full max-w-xl flex-col items-center text-center lg:items-start lg:text-left">
            {/*
                flex: flexbox
                w-full: 幅100%
                max-w-xl: 最大幅36rem
                flex-col: 縦並び
                items-center: 縦軸中央揃え
                text-center: テキスト中央揃え
                lg:items-start: lgで上揃え
                lg:text-left: lgでテキスト左揃え
            */}
            <img
                src={avatarSrc}
                alt={name}
                className="w-40 h-40 rounded-full object-cover border-4 border-indigo-500/50 shadow-lg shadow-indigo-500/20 mb-8"
            />
            {/*
                w-40/h-40: 幅/高さ10rem
                rounded-full: 円形
                object-cover: 画像をトリミングして覆う
                border-4: 枠線4px
                border-indigo-500/50: 枠線色 indigo-500 50%不透明
                shadow-lg: 大きめ影
                shadow-indigo-500/20: 影色 indigo-500 20%不透明
                mb-8: 下マージン2rem
            */}
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{name}</h1>
            {/* text-4xl: 文字サイズ大, md:text-5xl: mdでさらに大, font-bold: 太字, text-white: 文字色白, mb-4: 下マージン1rem */}
            <p className="text-lg text-slate-400 mb-8">{role}</p>
            {/* text-lg: 文字サイズ大, text-slate-400: 文字色 slate-400, mb-8: 下マージン2rem */}
            <div className="flex flex-wrap items-center justify-center gap-6 lg:justify-start">
                {/*
                    flex: flexbox
                    flex-wrap: 折り返し
                    items-center: 縦軸中央揃え
                    justify-center: 横軸中央揃え
                    gap-6: 間隔1.5rem
                    lg:justify-start: lgで左寄せ
                */}
                <SocialLink href={githubUrl} label="GitHub">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        {/* w-5/h-5: 幅/高さ1.25rem */}
                        <path
                            fillRule="evenodd"
                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                            clipRule="evenodd"
                        />
                    </svg>
                </SocialLink>
                <SocialLink href={xUrl} label="X">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        {/* w-5/h-5: 幅/高さ1.25rem */}
                        <path
                            d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                </SocialLink>
            </div>
        </div>
    );
};
