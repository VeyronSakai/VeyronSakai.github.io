import icon from "@/assets/icon.png";
import { BreakoutPanel } from "@/presentations/components/BreakoutPanel";
import { Header } from "@/presentations/components/Header";
import { HeroProfile } from "@/presentations/components/HeroProfile";

function App() {
    return (
        <div className="min-h-screen bg-slate-900 text-slate-200">
            <Header logoSrc={icon} />

            {/* Hero Section */}
            <main className="pt-24 pb-16">
                <section className="max-w-6xl mx-auto px-6 py-20">
                    <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-start lg:justify-between">
                        <HeroProfile
                            name="Yuki Sakai"
                            role="Software Engineer"
                            avatarSrc={icon}
                            githubUrl="https://github.com/VeyronSakai"
                            xUrl="https://x.com/VeyronSakai"
                        />

                        <BreakoutPanel />
                    </div>
                </section>
            </main>
        </div>
    );
}

export default App;
