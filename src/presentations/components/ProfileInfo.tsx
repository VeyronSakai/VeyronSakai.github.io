type ProfileInfoProps = {
    location: string;
    gender: string;
    skills: string[];
}

function ProfileInfo({location, gender, skills}: ProfileInfoProps) {
    return (
        <>
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
        </>
    );
}

export default ProfileInfo;