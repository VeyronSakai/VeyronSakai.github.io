import {SocialLink} from "@/presentations/components/SocialLink";

type HeroProfileProps = {
    name: string;
    role: string;
    avatarSrc: string;
    location: string;
    gender: string;
    skills: string[];
    githubUrl: string;
    xUrl: string;
    zennUrl: string;
    qiitaUrl: string;
};

export const HeroProfile = ({
                                name,
                                role,
                                avatarSrc,
                                location,
                                gender,
                                skills,
                                githubUrl,
                                xUrl,
                                zennUrl,
                                qiitaUrl
                            }: HeroProfileProps) => {
    return (
        <div className="flex w-full max-w-xl flex-col items-center text-center">
            {/*
                flex: flexbox
                w-full: 幅100%
                max-w-xl: 最大幅36rem
                flex-col: 縦並び
                items-center: 縦軸中央揃え
                text-center: テキスト中央揃え
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

            {/* Profile Info Section */}
            <div className="w-full mb-8 space-y-3">
                {/*
                    w-full: 幅100%
                    mb-8: 下マージン2rem
                    space-y-3: 子要素間の縦方向間隔0.75rem
                */}

                <div className="flex flex-row items-center justify-center gap-6">
                    {/*
                        flex: flexbox
                        flex-row: 横並び
                        items-center: 縦軸中央揃え
                        justify-center: 横軸中央揃え
                        gap-6: 子要素間の間隔1.5rem
                    */}
                    <div className="flex items-center gap-2 text-slate-300">
                        {/*
                        flex: flexbox
                        items-center: 縦軸中央揃え
                        gap-2: 間隔0.5rem
                        text-slate-300: 文字色 slate-300
                    */}
                        <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {/* w-5/h-5: 幅/高さ1.25rem, text-indigo-400: アイコン色 indigo-400 */}
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                        </svg>
                        <span>{location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-300">
                        {/*
                        flex: flexbox
                        items-center: 縦軸中央揃え
                        gap-2: 間隔0.5rem
                        text-slate-300: 文字色 slate-300
                    */}
                        <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {/*
                                w-5/h-5: 幅/高さ1.25rem
                                text-indigo-400: アイコン色 indigo-400
                                fill="none": 図形の内部を塗りつぶさない（透明）
                                stroke="currentColor": 輪郭線の色を現在の文字色（text-indigo-400）に設定
                                viewBox="0 0 24 24": SVGの座標系を定義（左上(0,0)から幅24x高さ24の領域）
                            */}
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                        </svg>
                        <span>{gender}</span>
                    </div>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-2 mt-4">
                    {/*
                        flex: flexbox
                        flex-wrap: 折り返し
                        items-center: 縦軸中央揃え
                        justify-center: 横軸中央揃え
                        gap-2: 間隔0.5rem
                        mt-4: 上マージン1rem
                    */}
                    {skills.map((skill) => (
                        <span
                            key={skill}
                            className="px-3 py-1 text-sm rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30"
                        >
                            {/*
                                px-3: 左右パディング0.75rem
                                py-1: 上下パディング0.25rem
                                text-sm: 文字サイズ小(0.875rem)
                                rounded-full: 完全な角丸
                                bg-indigo-500/20: 背景色 indigo-500 20%不透明
                                text-indigo-300: 文字色 indigo-300
                                border: 枠線
                                border-indigo-500/30: 枠線色 indigo-500 30%不透明
                            */}
                            {skill}
                        </span>
                    ))}
                </div>
            </div>

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
                <SocialLink href={xUrl}>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        {/* w-5/h-5: 幅/高さ1.25rem */}
                        <path
                            d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                </SocialLink>
                <SocialLink href={zennUrl} label="Zenn">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        {/* w-5/h-5: 幅/高さ1.25rem */}
                        <path
                            d="M.264 23.771h4.984c.264 0 .498-.147.645-.352L19.614.874c.176-.293-.029-.645-.381-.645h-4.72c-.235 0-.44.117-.557.323L.03 23.361c-.088.176.029.41.234.41zM17.445 23.419l6.479-10.408c.205-.323-.029-.733-.41-.733h-4.691c-.176 0-.352.088-.44.235l-6.655 10.643c-.176.264.029.616.352.616h4.779c.205-.001.381-.118.586-.353z"/>
                    </svg>
                </SocialLink>
                <SocialLink href={qiitaUrl} label="Qiita">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        {/*
                            w-5/h-5: 幅/高さ1.25rem
                            fill="currentColor": 図形の内部を現在の文字色で塗りつぶす
                            viewBox="0 0 24 24": SVGの座標系を定義（左上(0,0)から幅24x高さ24の領域）
                            aria-hidden="true": スクリーンリーダーからこの要素を隠す（装飾用アイコンのため）
                        */}
                        <path
                            d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2.182a9.818 9.818 0 110 19.636 9.818 9.818 0 010-19.636zm0 3.273a6.545 6.545 0 100 13.09 6.545 6.545 0 000-13.09zm0 2.181a4.364 4.364 0 110 8.728 4.364 4.364 0 010-8.728z"/>
                    </svg>
                </SocialLink>
            </div>
        </div>
    );
};
