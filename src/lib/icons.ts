interface IconMap {
  [key: string]: {
    name: string;
    path: string; // StaticImport
  };
}

const url = (name: string) => `/icons/${name}.svg`;

export const icons: IconMap = {
  avionics: {
    name: 'Avionics',
    path: url('avionics'),
  },
  aws: {
    name: 'Amazon Web Services',
    path: url('aws'),
  },
  bash: {
    name: 'Bash',
    path: url('bash'),
  },
  bootstrap: {
    name: 'Bootstrap',
    path: url('bootstrap'),
  },
  css: {
    name: 'CSS',
    path: url('css'),
  },
  cypress: {
    name: 'Cypress',
    path: url('cypress'),
  },
  docker: {
    name: 'Docker',
    path: url('docker'),
  },
  drone: {
    name: 'Drone',
    path: url('drone'),
  },
  express: {
    name: 'Express',
    path: url('express'),
  },
  git: {
    name: 'Git',
    path: url('git'),
  },
  github: {
    name: 'GitHub',
    path: url('github'),
  },
  gmail: {
    name: 'Gmail',
    path: url('gmail'),
  },
  graphql: {
    name: 'GraphQL',
    path: url('graphql'),
  },
  handlebars: {
    name: 'Handlebars',
    path: url('handlebars'),
  },
  heroku: {
    name: 'Heroku',
    path: url('heroku'),
  },
  html: {
    name: 'HTML',
    path: url('html'),
  },
  javascript: {
    name: 'JavaScript',
    path: url('javascript'),
  },
  jest: {
    name: 'Jest',
    path: url('jest'),
  },
  jfrog: {
    name: 'jFrog',
    path: url('jfrog'),
  },
  jquery: {
    name: 'jQuery',
    path: url('jquery'),
  },
  kubernetes: {
    name: 'Kubernetes',
    path: url('kubernetes'),
  },
  link: {
    name: 'Link',
    path: url('link'),
  },
  linkedin: {
    name: 'LinkedIn',
    path: url('linkedin'),
  },
  materialize: {
    name: 'Materialize',
    path: url('materialize'),
  },
  mongodb: {
    name: 'MongoDB',
    path: url('mongodb'),
  },
  mongoose: {
    name: 'Mongoose',
    path: url('mongoose'),
  },
  mui: {
    name: 'MUI',
    path: url('mui'),
  },
  mysql: {
    name: 'MySQL',
    path: url('mysql'),
  },
  netlify: {
    name: 'Netlify',
    path: url('netlify'),
  },
  next: {
    name: 'Next',
    path: url('next'),
  },
  node: {
    name: 'Node',
    path: url('node'),
  },
  pillar: {
    name: 'Pillar',
    path: url('pillar'),
  },
  postgresql: {
    name: 'Postgresql',
    path: url('postgresql'),
  },
  react: {
    name: 'React',
    path: url('react'),
  },
  redux: {
    name: 'Redux',
    path: url('redux'),
  },
  sequelize: {
    name: 'Sequelize',
    path: url('sequelize'),
  },
  tailwind: {
    name: 'Tailwind',
    path: url('tailwind'),
  },
  typescript: {
    name: 'TypeScript',
    path: url('typescript'),
  },
  uw: {
    name: 'UW',
    path: url('uw'),
  },
  vercel: {
    name: 'Vercel',
    path: url('vercel'),
  },
  vite: {
    name: 'Vite',
    path: url('vite'),
  },
  mocha: {
    name: 'Mocha',
    path: url('mocha'),
  },
  chai: {
    name: 'Chai',
    path: url('chai'),
  },
  webpack: {
    name: 'Webpack',
    path: url('webpack'),
  },
  codepen: {
    name: 'Codepen',
    path: url('codepen'),
  },
  python: {
    name: 'Python',
    path: url('python'),
  },
  flask: {
    name: 'Flask',
    path: url('flask'),
  },
  render: {
    name: 'Render',
    path: url('render'),
  },
};
