import icon from "./assets/icon.png";

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header */}
      <header className="fixed top-0 left-4 right-4 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50">
        <div className="max-w-full mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <img
              src={icon}
              alt="Logo"
              className="w-10 h-10 rounded-full object-cover"
            />

            {/* Navigation */}
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
    </div>
  );
}

export default App;
