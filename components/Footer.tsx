import { Code2, Heart } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#060609] border-t border-white/5 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center glow-blue group-hover:scale-110 transition-transform">
              <Code2 size={16} className="text-white" />
            </div>
            <span className="font-bold text-white">
              S<span className="text-blue-400">.</span>LODONOU
            </span>
          </a>

          {/* Copyright */}
          <p className="text-slate-500 text-sm flex items-center gap-1.5">
            © {year} Samuel LODONOU — Fait avec{' '}
            <Heart size={13} className="text-red-400 fill-red-400" />{' '}
            &amp; beaucoup de ☕
          </p>

          {/* Nav links */}
          <div className="flex items-center gap-5 text-sm">
            {['Accueil', 'Projets', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item === 'Accueil' ? 'hero' : item.toLowerCase()}`}
                className="text-slate-500 hover:text-blue-400 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
