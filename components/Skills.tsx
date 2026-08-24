import { useState } from 'react';
import { Code, Server, Database, Wrench } from 'lucide-react';

const categories = [
  {
    id: 'frontend',
    label: 'Frontend',
    icon: Code,
    color: 'blue',
    skills: [
      { name: 'HTML / CSS', level: 90, icon: '🌐' },
      { name: 'JavaScript', level: 80, icon: '⚡' },
      { name: 'TypeScript', level: 70, icon: '💙' },
      { name: 'React.js', level: 75, icon: '⚛️' },
      { name: 'Tailwind CSS', level: 85, icon: '🎨' },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    icon: Server,
    color: 'purple',
    skills: [
      { name: 'Node.js', level: 75, icon: '🟢' },
      { name: 'Express.js', level: 70, icon: '🚂' },
      { name: 'PHP', level: 65, icon: '🐘' },
      { name: 'Python', level: 60, icon: '🐍' },
      { name: 'REST API', level: 75, icon: '🔗' },
    ],
  },
  {
    id: 'database',
    label: 'Base de données',
    icon: Database,
    color: 'cyan',
    skills: [
      { name: 'MySQL', level: 75, icon: '🗄️' },
      { name: 'PostgreSQL', level: 65, icon: '🐘' },
      { name: 'MongoDB', level: 60, icon: '🍃' },
      { name: 'Firebase', level: 65, icon: '🔥' },
    ],
  },
  {
    id: 'tools',
    label: 'Outils',
    icon: Wrench,
    color: 'green',
    skills: [
      { name: 'Git / GitHub', level: 80, icon: '🐙' },
      { name: 'VS Code', level: 95, icon: '💻' },
      { name: 'Docker', level: 50, icon: '🐳' },
      { name: 'Figma', level: 65, icon: '🎭' },
      { name: 'Linux', level: 60, icon: '🐧' },
    ],
  },
];

const techStack = [
  'React', 'Node.js', 'TypeScript', 'Express', 'MySQL', 
  'MongoDB', 'Git', 'Tailwind', 'Python', 'Docker',
  'HTML5', 'CSS3', 'JavaScript', 'PHP', 'Firebase',
];

const colorMap: Record<string, string> = {
  blue: 'from-blue-600 to-blue-400',
  purple: 'from-purple-600 to-purple-400',
  cyan: 'from-cyan-600 to-cyan-400',
  green: 'from-green-600 to-green-400',
};

const bgColorMap: Record<string, string> = {
  blue: 'bg-blue-600/20 text-blue-400',
  purple: 'bg-purple-600/20 text-purple-400',
  cyan: 'bg-cyan-600/20 text-cyan-400',
  green: 'bg-green-600/20 text-green-400',
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const current = categories.find((c) => c.id === activeCategory)!;

  return (
    <section id="skills" className="py-24 bg-[#080810] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-4">
            <Code size={14} />
            Compétences techniques
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Mon <span className="text-gradient">Stack Technique</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto" />
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(({ id, label, icon: Icon, color }) => (
            <button
              key={id}
              onClick={() => setActiveCategory(id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                activeCategory === id
                  ? `bg-gradient-to-r ${colorMap[color]} text-white shadow-lg`
                  : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border border-white/10'
              }`}
            >
              <Icon size={15} />
              {label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Progress bars */}
          <div className="neon-border rounded-2xl p-8 bg-white/[0.02]">
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${bgColorMap[current.color]}`}>
                <current.icon size={16} />
              </div>
              {current.label}
            </h3>
            <div className="space-y-5">
              {current.skills.map(({ name, level, icon }) => (
                <div key={name}>
                  <div className="flex justify-between mb-2">
                    <div className="flex items-center gap-2 text-slate-300 text-sm font-medium">
                      <span>{icon}</span>
                      <span>{name}</span>
                    </div>
                    <span className="text-blue-400 text-sm font-bold">{level}%</span>
                  </div>
                  <div className="w-full bg-white/5 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full bg-gradient-to-r ${colorMap[current.color]} transition-all duration-1000`}
                      style={{ width: `${level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Level indicator */}
          <div className="neon-border rounded-2xl p-8 bg-white/[0.02]">
            <h3 className="text-white font-bold text-lg mb-6">Niveau de maîtrise</h3>
            <div className="grid grid-cols-1 gap-4">
              {current.skills.map(({ name, level, icon }) => {
                const getLabel = (l: number) => {
                  if (l >= 85) return { text: 'Expert', color: 'text-green-400', bg: 'bg-green-400/10' };
                  if (l >= 70) return { text: 'Avancé', color: 'text-blue-400', bg: 'bg-blue-400/10' };
                  if (l >= 55) return { text: 'Intermédiaire', color: 'text-yellow-400', bg: 'bg-yellow-400/10' };
                  return { text: 'Débutant', color: 'text-orange-400', bg: 'bg-orange-400/10' };
                };
                const badge = getLabel(level);
                return (
                  <div
                    key={name}
                    className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] border border-white/5 hover:border-blue-500/20 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{icon}</span>
                      <span className="text-slate-300 text-sm font-medium">{name}</span>
                    </div>
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${badge.color} ${badge.bg}`}>
                      {badge.text}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Tech cloud */}
        <div className="text-center">
          <h3 className="text-white font-bold text-lg mb-6">Technologies & Outils</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 neon-border rounded-lg text-sm text-slate-300 hover:text-blue-400 hover:border-blue-500/40 transition-all duration-200 bg-white/[0.02] cursor-default card-hover"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
