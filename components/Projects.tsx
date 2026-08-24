import { useState } from 'react';
import { ExternalLink, Folder } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description:
      'Application e-commerce complète avec panier, authentification utilisateur, paiement en ligne et tableau de bord administrateur.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
    category: 'fullstack',
    emoji: '🛍️',
    color: 'from-blue-600/20 to-blue-400/5',
    border: 'border-blue-500/20',
    demo: '#',
    github: 'https://github.com',
  },
  {
    id: 2,
    title: 'Gestion de Tâches',
    description:
      'Application de gestion de tâches collaborative avec tableau Kanban, assignation d\'équipe et notifications en temps réel.',
    tags: ['React', 'TypeScript', 'Firebase', 'Tailwind'],
    category: 'frontend',
    emoji: '📋',
    color: 'from-purple-600/20 to-purple-400/5',
    border: 'border-purple-500/20',
    demo: '#',
    github: 'https://github.com',
  },
  {
    id: 3,
    title: 'API REST Blog',
    description:
      'API RESTful pour un blog avec gestion des utilisateurs, articles, commentaires et système d\'authentification JWT.',
    tags: ['Node.js', 'Express', 'MySQL', 'JWT'],
    category: 'backend',
    emoji: '🔗',
    color: 'from-cyan-600/20 to-cyan-400/5',
    border: 'border-cyan-500/20',
    demo: '#',
    github: 'https://github.com',
  },
  {
    id: 4,
    title: 'Portfolio Personnel',
    description:
      'Site vitrine moderne avec animations fluides, design responsive et optimisation SEO pour présenter mes compétences.',
    tags: ['React', 'TypeScript', 'Tailwind', 'Framer Motion'],
    category: 'frontend',
    emoji: '💼',
    color: 'from-green-600/20 to-green-400/5',
    border: 'border-green-500/20',
    demo: '#',
    github: 'https://github.com',
  },
  {
    id: 5,
    title: 'Dashboard Analytics',
    description:
      'Tableau de bord interactif avec graphiques dynamiques, filtres avancés et exports de données pour la prise de décision.',
    tags: ['React', 'Chart.js', 'Node.js', 'PostgreSQL'],
    category: 'fullstack',
    emoji: '📊',
    color: 'from-orange-600/20 to-orange-400/5',
    border: 'border-orange-500/20',
    demo: '#',
    github: 'https://github.com',
  },
  {
    id: 6,
    title: 'App Météo',
    description:
      'Application météo avec géolocalisation, prévisions sur 7 jours et interface moderne consommant une API tierce.',
    tags: ['React', 'OpenWeather API', 'CSS'],
    category: 'frontend',
    emoji: '🌤️',
    color: 'from-pink-600/20 to-pink-400/5',
    border: 'border-pink-500/20',
    demo: '#',
    github: 'https://github.com',
  },
];

const filters = [
  { id: 'all', label: 'Tous' },
  { id: 'fullstack', label: 'Full Stack' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend' },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filtered = projects.filter(
    (p) => activeFilter === 'all' || p.category === activeFilter
  );

  return (
    <section id="projects" className="py-24 bg-[#0a0a0f] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-4">
            <Folder size={14} />
            Mes réalisations
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Projets <span className="text-gradient">Récents</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mb-6" />
          <p className="text-slate-400 max-w-2xl mx-auto">
            Voici une sélection de mes projets réalisés. Chacun d'entre eux représente 
            un défi relevé avec passion et professionnalisme.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => setActiveFilter(id)}
              className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                activeFilter === id
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                  : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border border-white/10'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <div
              key={project.id}
              className={`group relative rounded-2xl border ${project.border} bg-gradient-to-br ${project.color} backdrop-blur-sm p-6 card-hover flex flex-col`}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="text-4xl">{project.emoji}</div>
                <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                    title="GitHub"
                  >
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                  <a
                    href={project.demo}
                    className="w-8 h-8 rounded-lg bg-white/10 hover:bg-blue-500/40 flex items-center justify-center transition-colors"
                    title="Demo"
                  >
                    <ExternalLink size={14} className="text-white" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-white font-bold text-lg mb-2">{project.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-4">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 bg-white/10 text-slate-300 rounded-md border border-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* More projects CTA */}
        <div className="text-center mt-12">
          <p className="text-slate-400 mb-4">Plus de projets disponibles sur GitHub</p>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 neon-border rounded-xl text-blue-400 hover:text-white hover:bg-blue-600 font-semibold transition-all duration-200 hover:-translate-y-1"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
            Voir sur GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
