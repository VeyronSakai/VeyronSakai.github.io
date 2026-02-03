import ProfileAvatar from "@/presentations/components/ProfileAvatar.tsx";
import ProfileInfo from "@/presentations/components/ProfileInfo.tsx";
import SocialLinks from "@/presentations/components/SocialLinks.tsx";

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

            <ProfileAvatar avatarSrc={avatarSrc} name={name}/>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{name}</h1>
            {/* text-4xl: 文字サイズ大, md:text-5xl: mdでさらに大, font-bold: 太字, text-white: 文字色白, mb-4: 下マージン1rem */}
            <p className="text-lg text-slate-400 mb-8">{role}</p>
            {/* text-lg: 文字サイズ大, text-slate-400: 文字色 slate-400, mb-8: 下マージン2rem */}

            <ProfileInfo location={location} gender={gender} skills={skills}/>

            <SocialLinks githubUrl={githubUrl} xUrl={xUrl} zennUrl={zennUrl} qiitaUrl={qiitaUrl}/>
        </div>
    );
};
