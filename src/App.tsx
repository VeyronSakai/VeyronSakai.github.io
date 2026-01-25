function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="py-6 px-8 border-b border-gray-800">
        <nav className="max-w-4xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">VeyronSakai</h1>
          <ul className="flex gap-6">
            <li>
              <a
                href="#about"
                className="hover:text-blue-400 transition-colors"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="hover:text-blue-400 transition-colors"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-blue-400 transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-4">Hello, I'm VeyronSakai</h2>
          <p className="text-xl text-gray-400">Software Engineer</p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-8 bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-6">About</h3>
          <p className="text-gray-300 leading-relaxed">
            ソフトウェアエンジニアとして活動しています。
            新しい技術を学び、プロダクト開発に取り組んでいます。
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-8">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-6">Skills</h3>
          <div className="flex flex-wrap gap-3">
            {["TypeScript", "React", "Node.js", "Python", "Go"].map((skill) => (
              <span key={skill} className="px-4 py-2 bg-gray-800 rounded-lg">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-8 bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-6">Contact</h3>
          <a
            href="https://github.com/VeyronSakai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
          >
            GitHub →
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 px-8 border-t border-gray-800 text-center text-gray-500">
        <p>© 2026 VeyronSakai. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
