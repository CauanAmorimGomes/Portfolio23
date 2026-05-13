export const PERSONAL_INFO = {
  name: 'Cauan Amorim Gomes',
  title: 'Desenvolvedor Full Stack',
  email: 'cauan@example.com',
  location: 'Brasil',
  github: 'https://github.com/CauanAmorimGomes',
  linkedin: 'https://linkedin.com/in/cauan-amorim',
  twitter: 'https://twitter.com',
};

export const ABOUT_TEXT = {
  intro: 'Olá! Sou Cauan Amorim Gomes, um desenvolvedor apaixonado por tecnologia e inovação. Com experiência em desenvolvimento web full stack, eu crio soluções digitais que combinam funcionalidade, performance e design elegante.',
  journey: 'Minha jornada no desenvolvimento começou com a curiosidade de entender como as coisas funcionam, e se transformou em uma paixão por construir aplicações que fazem a diferença. Estou sempre aprendendo novas tecnologias e buscando os melhores padrões de desenvolvimento.',
  hobby: 'Quando não estou codificando, você pode me encontrar explorando novas tecnologias, contribuindo para projetos open source, ou compartilhando conhecimento com a comunidade dev.',
};

export const SKILL_CATEGORIES = [
  {
    title: 'Frontend',
    icon: '🎨',
    skills: [
      { name: 'React', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'JavaScript', level: 90 },
      { name: 'HTML/CSS', level: 95 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'Next.js', level: 80 },
    ],
  },
  {
    title: 'Backend',
    icon: '⚙️',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Python', level: 80 },
      { name: 'Express', level: 85 },
      { name: 'REST API', level: 90 },
      { name: 'GraphQL', level: 75 },
      { name: 'PostgreSQL', level: 80 },
    ],
  },
  {
    title: 'Ferramentas',
    icon: '🛠️',
    skills: [
      { name: 'Git/GitHub', level: 90 },
      { name: 'Docker', level: 75 },
      { name: 'VS Code', level: 95 },
      { name: 'Figma', level: 80 },
      { name: 'Linux', level: 85 },
      { name: 'CI/CD', level: 70 },
    ],
  },
];

export const PROJECTS = [
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

export const CONTACT_INFO = [
  {
    icon: '📧',
    title: 'Email',
    value: PERSONAL_INFO.email,
    link: `mailto:${PERSONAL_INFO.email}`,
  },
  {
    icon: '💼',
    title: 'LinkedIn',
    value: 'Cauan Amorim',
    link: PERSONAL_INFO.linkedin,
  },
  {
    icon: '🐙',
    title: 'GitHub',
    value: 'CauanAmorimGomes',
    link: PERSONAL_INFO.github,
  },
  {
    icon: '📍',
    title: 'Localização',
    value: PERSONAL_INFO.location,
    link: '#',
  },
];

export const FEATURES = [
  { icon: '⚡', label: 'Performance', desc: 'Otimização de código' },
  { icon: '📱', label: 'Responsivo', desc: 'Design adaptável' },
  { icon: '♿', label: 'Acessível', desc: 'Para todos' },
  { icon: '🔒', label: 'Seguro', desc: 'Boas práticas' },
];
