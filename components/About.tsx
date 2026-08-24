import { User, MapPin, GraduationCap, Coffee, Heart, Zap } from 'lucide-react';

const stats = [
  { value: '10+', label: 'Projets réalisés', icon: '🚀' },
  { value: '5+', label: 'Technologies maîtrisées', icon: '⚡' },
  { value: '100%', label: 'Passion & Dévouement', icon: '❤️' },
  { value: '1+', label: 'Année d\'expérience', icon: '📅' },
];

const facts = [
  { icon: MapPin, label: 'Localisation', value: 'Bénin, Afrique de l\'Ouest' },
  { icon: GraduationCap, label: 'Formation', value: 'Développement Web Full Stack' },
  { icon: Coffee, label: 'Café par jour', value: 'Nombreux ☕' },
  { icon: Heart, label: 'Passion', value: 'Code, Innovation & Création' },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#0a0a0f] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-4">
            <User size={14} />
            À propos de moi
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Qui suis-je <span className="text-gradient">?</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Text */}
          <div className="space-y-6">
            <div className="neon-border rounded-2xl p-6 bg-white/[0.02] card-hover">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center shrink-0">
                  <Zap size={22} className="text-blue-400" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-2">Mon Histoire</h3>
                  <p className="text-slate-400 leading-relaxed">
                    Je suis <span className="text-blue-400 font-semibold">Samuel LODONOU</span>, 
                    développeur Full Stack Junior passionné par la technologie et le développement web. 
                    Ma curiosité naturelle m'a conduit vers le monde du code, où chaque problème 
                    devient une opportunité d'apprentissage et de créativité.
                  </p>
                </div>
              </div>
            </div>

            <div className="neon-border rounded-2xl p-6 bg-white/[0.02] card-hover">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-600/20 rounded-xl flex items-center justify-center shrink-0">
                  <GraduationCap size={22} className="text-purple-400" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-2">Ma Philosophie</h3>
                  <p className="text-slate-400 leading-relaxed">
                    Je crois en un code propre, des interfaces intuitives et des solutions 
                    évolutives. Chaque ligne de code que j'écris est pensée pour offrir 
                    la meilleure expérience utilisateur possible tout en maintenant 
                    une architecture robuste côté serveur.
                  </p>
                </div>
              </div>
            </div>

            {/* Personal facts */}
            <div className="grid grid-cols-2 gap-3">
              {facts.map(({ icon: Icon, label, value }) => (
                <div key={label} className="neon-border rounded-xl p-4 bg-white/[0.02] flex items-start gap-3">
                  <Icon size={16} className="text-blue-400 mt-0.5 shrink-0" />
                  <div>
                    <div className="text-slate-500 text-xs">{label}</div>
                    <div className="text-white text-sm font-medium">{value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Stats + Code snippet */}
          <div className="space-y-6">
            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map(({ value, label, icon }) => (
                <div
                  key={label}
                  className="neon-border rounded-2xl p-6 bg-white/[0.02] text-center card-hover group"
                >
                  <div className="text-3xl mb-2">{icon}</div>
                  <div className="text-3xl font-black text-gradient mb-1">{value}</div>
                  <div className="text-slate-400 text-sm">{label}</div>
                </div>
              ))}
            </div>

            {/* Code snippet decoration */}
            <div className="neon-border rounded-2xl overflow-hidden bg-[#0d1117]">
              <div className="flex items-center gap-2 px-4 py-3 bg-[#161b22] border-b border-blue-500/10">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-green-500/70" />
                <span className="ml-2 text-slate-500 text-xs font-mono">samuel.ts</span>
              </div>
              <div className="p-5 font-mono text-sm leading-relaxed">
                <div>
                  <span className="text-purple-400">const</span>{' '}
                  <span className="text-blue-300">samuel</span>{' '}
                  <span className="text-white">=</span>{' '}
                  <span className="text-yellow-400">{'{'}</span>
                </div>
                <div className="pl-4">
                  <span className="text-green-400">name</span>
                  <span className="text-white">: </span>
                  <span className="text-orange-300">"Samuel LODONOU"</span><span className="text-white">,</span>
                </div>
                <div className="pl-4">
                  <span className="text-green-400">role</span>
                  <span className="text-white">: </span>
                  <span className="text-orange-300">"Full Stack Developer"</span><span className="text-white">,</span>
                </div>
                <div className="pl-4">
                  <span className="text-green-400">location</span>
                  <span className="text-white">: </span>
                  <span className="text-orange-300">"Bénin 🇧🇯"</span><span className="text-white">,</span>
                </div>
                <div className="pl-4">
                  <span className="text-green-400">passion</span>
                  <span className="text-white">: </span>
                  <span className="text-orange-300">"Building amazing apps"</span><span className="text-white">,</span>
                </div>
                <div className="pl-4">
                  <span className="text-green-400">available</span>
                  <span className="text-white">: </span>
                  <span className="text-blue-400">true</span><span className="text-white">,</span>
                </div>
                <div>
                  <span className="text-yellow-400">{'}'}</span><span className="text-white">;</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
