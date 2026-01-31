type HeaderProps = {
    logoSrc: string;
};

export const Header = ({ logoSrc }: HeaderProps) => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50">
            <div className="max-w-full mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <img src={logoSrc} alt="Logo" className="w-10 h-10 rounded-full object-cover" />
                    <nav className="flex items-center gap-8">
                        <a
                            href="#japanese"
                            className="text-sm font-medium text-slate-300 hover:text-indigo-400 transition-colors duration-300"
                        >
                            日本語
                        </a>
                        <a
                            href="#english"
                            className="text-sm font-medium text-slate-300 hover:text-indigo-400 transition-colors duration-300"
                        >
                            English
                        </a>
                    </nav>
                </div>
            </div>
        </header>
    );
};
