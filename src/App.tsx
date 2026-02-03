import icon from "@/assets/icon.png";
import {Header} from "@/presentations/components/Header";
import {HeroProfile} from "@/presentations/components/HeroProfile";

function App() {
    return (
        <div className="min-h-screen bg-slate-900 text-slate-200">
            {/*
                min-h-screen: 最小高さ100vh
                bg-slate-900: 背景色 slate-900
                text-slate-200: 文字色 slate-200
            */}
            <Header logoSrc={icon}/>

            {/* Hero Section */}
            {/* pt-24: 上パディング6rem, pb-16: 下パディング4rem */}
            <main className="pt-24 pb-16">
                {/* max-w-6xl: 最大幅6xl(72rem), mx-auto: 左右マージンautoで中央寄せ, px-6: 左右パディング1.5rem, py-20: 上下パディング5rem */}
                <section className="max-w-6xl mx-auto px-6 py-20">
                    {/* flex: flexbox, flex-col: 縦並び, items-center: 縦軸中央揃え, gap-12: 間隔3rem, lg:flex-row: lgで横並び, lg:items-start: lgで上揃え, lg:justify-between: lgで両端揃え */}
                    <div className="flex flex-col items-center gap-12">
                        <HeroProfile
                            name="Yuki Sakai"
                            role="Software Engineer"
                            avatarSrc={icon}
                            location="日本"
                            gender="男性"
                            skills={["Unity", "C#", "TypeScript", "React", "Go", "Rust"]}
                            githubUrl="https://github.com/VeyronSakai"
                            xUrl="https://x.com/VeyronSakai"
                            zennUrl="https://zenn.dev/veryon_sakai"
                            qiitaUrl="https://qiita.com/VeyronSakai"
                        />
                    </div>
                </section>
            </main>
        </div>
    );
}

export default App;
