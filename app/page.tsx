import { Mail, ExternalLink } from "lucide-react";

function GithubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LinkedinIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const projects = [
  {
    name: "rota-yonetim",
    description:
      "Vercel veritabanı kullanan tur şirketi rezervasyon uygulaması. Kullanıcılar otobüs bileti alıp rezervasyon yapabiliyor; yönetici paneli ile takip ve iptal mümkün.",
    techs: ["Next.js", "Vercel Postgres", "TypeScript"],
    github: "https://github.com/emelyilmaz123/rota-yonetim",
    color: "from-violet-500 to-indigo-500",
  },
  {
    name: "movie-data-analysis",
    description:
      "Film verilerini Python ile analiz eden ve kullanıcıların 'Ne izlemeliyim?' sorusuna yanıt veren kişiselleştirilmiş öneri sistemi.",
    techs: ["Python", "Pandas", "Data Analysis"],
    github: "https://github.com/emelyilmaz123/movie-data-analysis",
    color: "from-pink-500 to-rose-500",
  },
  {
    name: "gorsel_analiz",
    description:
      "Yüklenen fotoğraftaki içeriği yapay zeka ile tespit edip tek tek açıklayan görüntü analiz uygulaması.",
    techs: ["Python", "AI", "Computer Vision"],
    github: "https://github.com/emelyilmaz123/gorsel_analiz",
    color: "from-cyan-500 to-blue-500",
  },
  {
    name: "nodus-web",
    description:
      "Yapay zeka asistan uygulaması Nodus için özel olarak tasarlanmış tanıtım ve pazarlama web sitesi.",
    techs: ["Next.js", "Tailwind CSS"],
    github: "https://github.com/emelyilmaz123/nodus-web",
    color: "from-emerald-500 to-teal-500",
  },
];

const skills = ["Python", "C#", "SQL", "Web Geliştirme"];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0f0f1a]">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-600 via-purple-600 to-blue-600 opacity-90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(120,80,255,0.3),_transparent_60%)]" />
        <div className="relative max-w-4xl mx-auto px-6 py-28 text-center">
          <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/80 text-sm mb-6 backdrop-blur-sm">
            Web Geliştirici &amp; Veri Analizi
          </div>
          <h1 className="text-6xl font-bold text-white mb-4 tracking-tight">
            Emel Yılmaz
          </h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Web geliştirme alanında profesyonel deneyim kazandım, veri analizi
            ve yapay zeka projelerine tutkuyla yaklaşıyorum.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <a
              href="https://github.com/emelyilmaz123"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-gray-900 font-medium text-sm hover:bg-white/90 transition-all shadow-lg"
            >
              <GithubIcon size={16} />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/emel-yılmaz-74046b307"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 border border-white/30 text-white font-medium text-sm hover:bg-white/20 transition-all backdrop-blur-sm"
            >
              <LinkedinIcon size={16} />
              LinkedIn
            </a>
            <a
              href="mailto:emelyilmaz412@gmail.com"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 border border-white/30 text-white font-medium text-sm hover:bg-white/20 transition-all backdrop-blur-sm"
            >
              <Mail size={16} />
              E-posta
            </a>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Teknolojiler */}
        <section className="mb-16">
          <h2 className="text-xs font-semibold tracking-widest uppercase text-purple-400 mb-6">
            Teknolojiler
          </h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/80 text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Projeler */}
        <section>
          <h2 className="text-xs font-semibold tracking-widest uppercase text-purple-400 mb-8">
            Projeler
          </h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.name}
                className="group relative rounded-2xl bg-white/5 border border-white/10 overflow-hidden hover:border-white/20 transition-all hover:bg-white/8"
              >
                <div className={`h-1.5 w-full bg-gradient-to-r ${project.color}`} />
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-semibold text-white text-sm leading-snug">
                      {project.name}
                    </h3>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/30 hover:text-white/80 transition-colors ml-2 flex-shrink-0"
                    >
                      <ExternalLink size={14} />
                    </a>
                  </div>
                  <p className="text-white/50 text-xs leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.techs.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-0.5 rounded-full bg-white/8 text-white/40"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <footer className="border-t border-white/5 text-center py-8">
        <p className="text-white/20 text-xs">© 2025 Emel Yılmaz</p>
      </footer>
    </div>
  );
}
