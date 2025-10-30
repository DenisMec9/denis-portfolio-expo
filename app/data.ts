// @data
export const PROFILE = {
  name: 'Denis Barbosa',
  role: 'Desenvolvedor Full Stack',
  about:
    'Sou estudante de Sistemas para Internet na UNICAP e residente no Porto Digital (Ferreira Costa). Apaixonado por tecnologia, inovação e design. Trabalho com Web/Mobile, banco de dados e projetos de IoT.',
  avatar: require('./assets/images/perfil.jpeg'),
  links: {
    whatsapp: 'https://wa.me/5581988954430',
    linkedin: 'https://linkedin.com/in/denis-barbosa-7b98972bb/',
    github: 'https://github.com/DenisMec9',
  },
};

export const SKILLS = [
  'React', 'Next.js', 'Expo', 'React Native', 'Tailwind', 'Node.js',
  'Spring Boot', 'PostgreSQL', 'Prisma', 'Parse(Back4App)', 'Firebase', 'IoT',
];

export const EXPERIENCES = [
  { title: 'Residente Porto Digital', company: 'Ferreira Costa', period: '2024 - 2025' },
  { title: 'Desenvolvedor Web', company: 'UNICAP', period: '2023 - 2024' },
];

export const PROJECTS = [
  {
    name: 'Ação Saúde',
    desc: 'Plataforma ONG com Next.js + Back4App (admin, hero dinâmico, galeria).',
    link: 'https://github.com/denisbarbosa/acao-saude',
    tags: ['Next.js', 'Tailwind', 'Back4App', 'Parse'],
  },
  {
    name: 'Clima+',
    desc: 'Alertas climáticos com IoT + ML. App e painel web.',
    link: 'https://github.com/denisbarbosa/clima-plus',
    tags: ['IoT', 'Expo', 'Python', 'API'],
  },
  {
    name: 'Hera',
    desc: 'Experimentos com arquitetura e design system.',
    link: 'https://github.com/denisbarbosa/hera',
    tags: ['Design System', 'React'],
  },
];
