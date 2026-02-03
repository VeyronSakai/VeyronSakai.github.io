type SkillBadgesProps = {
    skills: string[];
};

export const SkillBadges = ({skills}: SkillBadgesProps) => {
    return (
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
    );
};
