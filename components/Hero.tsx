import { useEffect, useState } from 'react';
import { Mail, Download, ChevronDown, Terminal } from 'lucide-react';

const typingTexts = [
  'Développeur Full Stack',
  'Passionné du Web',
  'React & Node.js',
  'UI/UX Enthusiaste',
];

export default function Hero() {
  const [typingIndex, setTypingIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const current = typingTexts[typingIndex];
    const speed = isDeleting ? 60 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(current.slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
        if (charIndex + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayText(current.slice(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setTypingIndex((prev) => (prev + 1) % typingTexts.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, typingIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center animated-gradient grid-bg overflow-hidden"
    >
      {/* Particles */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="particle"
          style={{
            width: `${Math.random() * 6 + 3}px`,
            height: `${Math.random() * 6 + 3}px`,
            left: `${10 + i * 15}%`,
            top: `${20 + (i % 3) * 20}%`,
            animationDelay: `${i * 1.2}s`,
            animationDuration: `${6 + i}s`,
          }}
        />
      ))}

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              Disponible pour des opportunités
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4 leading-tight">
              Bonjour, je suis{' '}
              <br />
              <span className="text-gradient">Samuel LODONOU</span>
            </h1>

            {/* Typing effect */}
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-6 h-10">
              <Terminal size={20} className="text-blue-400 shrink-0" />
              <span className="text-xl sm:text-2xl font-semibold text-slate-300">
                {displayText}
                <span className="cursor-blink text-blue-400">|</span>
              </span>
            </div>

            <p className="text-slate-400 text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed mb-8">
              Développeur Full Stack Junior passionné par la création d'applications web
              modernes, performantes et esthétiques. Je transforme vos idées en solutions
              digitales innovantes.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a
                href="#projects"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-1 flex items-center gap-2"
              >
                Voir mes projets
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border border-blue-500/40 text-blue-400 hover:bg-blue-500/10 font-semibold rounded-xl transition-all duration-200 hover:-translate-y-1 flex items-center gap-2"
              >
                <Download size={16} />
                Télécharger CV
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 justify-center lg:justify-start mt-8">
              <span className="text-slate-500 text-sm">Suivez-moi :</span>
              {[
                { label: 'GitHub', href: 'https://github.com', svg: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg> },
                { label: 'LinkedIn', href: 'https://linkedin.com', svg: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
                { label: 'Email', href: 'mailto:samuel.lodonou@email.com', svg: <Mail size={16} /> },
              ].map(({ svg, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 border border-slate-700 hover:border-blue-500 rounded-lg flex items-center justify-center text-slate-400 hover:text-blue-400 transition-all duration-200 hover:bg-blue-500/10"
                >
                  {svg}
                </a>
              ))}
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-shrink-0 relative float-anim">
            {/* Rings */}
            <div className="absolute inset-0 rounded-full border-2 border-blue-500/20 scale-110 animate-spin" style={{ animationDuration: '20s' }} />
            <div className="absolute inset-0 rounded-full border border-purple-500/20 scale-125" />

            {/* Glow behind */}
            <div className="absolute inset-0 bg-blue-600/20 rounded-full blur-2xl scale-150" />

            {/* Image */}
            <div className="relative w-56 h-72 sm:w-64 sm:h-80 lg:w-72 lg:h-96 rounded-3xl overflow-hidden neon-border">
              <img
                src="https://images.pexels.com/photos/256502/pexels-photo-256502.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
                alt="Code background"
                className="absolute inset-0 w-full h-full object-cover opacity-20"
              />
              {/* Placeholder avatar with initials */}
              <div className="relative z-10 w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-900/40 to-purple-900/40">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-4xl font-black text-white shadow-2xl mb-3">
                  SL
                </div>
                <span className="text-white font-bold text-lg">Samuel</span>
                <span className="text-blue-400 text-sm">Full Stack Dev</span>
              </div>
            </div>

            {/* Floating badges */}
            <div className="absolute -top-4 -right-4 bg-[#1a1a2e] neon-border rounded-xl px-3 py-2 shadow-lg">
              <div className="flex items-center gap-2 text-xs">
                <span className="text-2xl">⚡</span>
                <div>
                  <div className="text-white font-semibold">Full Stack</div>
                  <div className="text-slate-400">Développeur</div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-[#1a1a2e] neon-border rounded-xl px-3 py-2 shadow-lg">
              <div className="flex items-center gap-2 text-xs">
                <span className="text-2xl">🚀</span>
                <div>
                  <div className="text-white font-semibold">Passionné</div>
                  <div className="text-slate-400">& Créatif</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500">
        <span className="text-xs">Défiler</span>
        <ChevronDown size={20} className="animate-bounce" />
      </div>
    </section>
  );
}
