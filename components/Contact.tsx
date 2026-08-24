import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, MessageSquare } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'samuel.lodonou@email.com',
    href: 'mailto:samuel.lodonou@email.com',
    color: 'text-blue-400',
    bg: 'bg-blue-600/20',
  },
  {
    icon: Phone,
    label: 'Téléphone',
    value: '+229 XX XX XX XX',
    href: 'tel:+229XXXXXXXX',
    color: 'text-green-400',
    bg: 'bg-green-600/20',
  },
  {
    icon: MapPin,
    label: 'Localisation',
    value: 'Bénin, Afrique de l\'Ouest',
    href: '#',
    color: 'text-purple-400',
    bg: 'bg-purple-600/20',
  },
];

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com',
    svg: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
    color: 'hover:border-gray-400 hover:text-gray-300',
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com',
    svg: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    color: 'hover:border-blue-500 hover:text-blue-400',
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com',
    svg: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    color: 'hover:border-sky-400 hover:text-sky-400',
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-[#080810] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-4">
            <MessageSquare size={14} />
            Me contacter
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Travaillons <span className="text-gradient">Ensemble</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mb-6" />
          <p className="text-slate-400 max-w-2xl mx-auto">
            Vous avez un projet en tête ? N'hésitez pas à me contacter. 
            Je suis disponible pour des missions freelance ou un poste à temps plein.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Contact Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-white font-bold text-xl mb-6">Informations de contact</h3>
              <div className="space-y-4">
                {contactInfo.map(({ icon: Icon, label, value, href, color, bg }) => (
                  <a
                    key={label}
                    href={href}
                    className="flex items-center gap-4 p-4 neon-border rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-200 card-hover group"
                  >
                    <div className={`w-12 h-12 ${bg} rounded-xl flex items-center justify-center shrink-0`}>
                      <Icon size={20} className={color} />
                    </div>
                    <div>
                      <div className="text-slate-500 text-xs mb-0.5">{label}</div>
                      <div className="text-white font-medium group-hover:text-blue-400 transition-colors">
                        {value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social links */}
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Réseaux sociaux</h3>
              <div className="flex gap-4">
                {socialLinks.map(({ name, href, svg, color }) => (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={name}
                    className={`w-12 h-12 border border-slate-700 rounded-xl flex items-center justify-center text-slate-400 transition-all duration-200 ${color} hover:scale-110`}
                  >
                    {svg}
                  </a>
                ))}
              </div>
            </div>

            {/* Availability card */}
            <div className="neon-border rounded-2xl p-6 bg-gradient-to-br from-blue-600/10 to-purple-600/10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center shrink-0">
                  <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Disponible pour travailler</h4>
                  <p className="text-slate-400 text-sm">
                    Je suis actuellement disponible pour des opportunités de travail,
                    que ce soit en freelance, stage ou emploi à temps plein.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="neon-border rounded-2xl p-8 bg-white/[0.02]">
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <CheckCircle size={64} className="text-green-400 mb-4" />
                <h3 className="text-white font-bold text-2xl mb-2">Message envoyé !</h3>
                <p className="text-slate-400 mb-6">
                  Merci de m'avoir contacté. Je vous répondrai dans les plus brefs délais.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-colors"
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-white font-bold text-xl mb-6">Envoyez-moi un message</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-slate-400 text-sm mb-2 block">Nom complet *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Votre nom"
                        className="w-full bg-white/5 border border-white/10 focus:border-blue-500 rounded-xl px-4 py-3 text-white placeholder-slate-500 outline-none transition-colors text-sm"
                      />
                    </div>
                    <div>
                      <label className="text-slate-400 text-sm mb-2 block">Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="votre@email.com"
                        className="w-full bg-white/5 border border-white/10 focus:border-blue-500 rounded-xl px-4 py-3 text-white placeholder-slate-500 outline-none transition-colors text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-slate-400 text-sm mb-2 block">Sujet *</label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Objet de votre message"
                      className="w-full bg-white/5 border border-white/10 focus:border-blue-500 rounded-xl px-4 py-3 text-white placeholder-slate-500 outline-none transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <label className="text-slate-400 text-sm mb-2 block">Message *</label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Décrivez votre projet ou votre demande..."
                      className="w-full bg-white/5 border border-white/10 focus:border-blue-500 rounded-xl px-4 py-3 text-white placeholder-slate-500 outline-none transition-colors text-sm resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5 flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Envoyer le message
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
