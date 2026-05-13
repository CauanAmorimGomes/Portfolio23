import { useState } from 'react';

interface Project {
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  claudeUrl?: string;
  liveUrl?: string;
  image: string;
}

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects: Project[] = [
    {
      title: 'Portfólio Pessoal',
      description: 'Portfólio moderno e responsivo desenvolvido com React, TypeScript e Tailwind CSS. Apresenta animações suaves e design elegante.',
      tags: ['React', 'TypeScript', 'Tailwind'],
      githubUrl: 'https://github.com/CauanAmorimGomes',
      liveUrl: '#',
      image: '🎨',
    },
    {
      title: 'Sistema de Gestão',
      description: 'Aplicação full stack para gestão de projetos com autenticação, dashboard interativo e API RESTful.',
      tags: ['Node.js', 'Express', 'PostgreSQL'],
      githubUrl: 'https://github.com/CauanAmorimGomes',
      image: '📊',
    },
    {
      title: 'E-commerce Platform',
      description: 'Plataforma de e-commerce completa com carrinho de compras, sistema de pagamento e painel administrativo.',
      tags: ['React', 'Node.js', 'MongoDB'],
      githubUrl: 'https://github.com/CauanAmorimGomes',
      image: '🛒',
    },
    {
      title: 'Weather App',
      description: 'Aplicativo de previsão do tempo com integração de API externa, geolocalização e interface responsiva.',
      tags: ['JavaScript', 'API', 'CSS'],
      githubUrl: 'https://github.com/CauanAmorimGomes',
      liveUrl: '#',
      image: '🌤️',
    },
    {
      title: 'Task Manager',
      description: 'Gerenciador de tarefas com recursos de drag-and-drop, categorização e sincronização em tempo real.',
      tags: ['React', 'Firebase', 'Tailwind'],
      githubUrl: 'https://github.com/CauanAmorimGomes',
      claudeUrl: 'https://claude.ai',
      image: '✅',
    },
    {
      title: 'Blog Platform',
      description: 'Plataforma de blog com editor markdown, sistema de comentários e otimização SEO.',
      tags: ['Next.js', 'TypeScript', 'Prisma'],
      githubUrl: 'https://github.com/CauanAmorimGomes',
      liveUrl: '#',
      image: '📝',
    },
  ];

  const allTags = ['all', ...Array.from(new Set(projects.flatMap(p => p.tags)))];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.tags.includes(filter));

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Projetos
          </h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg">
            Alguns dos meus trabalhos recentes
          </p>
        </div>

        {/* Filter Tags */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              className={`px-6 py-2 rounded-full font-medium transition-all transform hover:scale-105 ${
                filter === tag
                  ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/50'
                  : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
              }`}
            >
              {tag.charAt(0).toUpperCase() + tag.slice(1)}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-purple-500/20 overflow-hidden hover:border-purple-500/40 transition-all hover:transform hover:scale-105 group"
            >
              <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 h-48 flex items-center justify-center text-8xl group-hover:scale-110 transition-transform">
                {project.image}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-purple-600/20 text-purple-300 text-xs rounded-full border border-purple-500/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg text-sm font-medium transition-all text-center"
                      title="Ver no GitHub"
                    >
                      <svg className="w-5 h-5 inline-block" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                  )}
                  {project.claudeUrl && (
                    <a
                      href={project.claudeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-sm font-medium transition-all text-center"
                      title="Ver no Claude"
                    >
                      Claude
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-lg text-sm font-medium transition-all text-center"
                      title="Ver Demo"
                    >
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="mt-16 text-center">
          <a
            href="https://github.com/CauanAmorimGomes"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-lg font-medium transition-all transform hover:scale-105 shadow-lg hover:shadow-purple-500/50"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            Ver Mais Projetos no GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
