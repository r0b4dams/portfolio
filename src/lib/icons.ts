interface IconMap {
  [key: string]: {
    name: string;
    path: string; // StaticImport
  };
}

const loc = (name: string) => `/icons/${name}.svg`;

export const icons: IconMap = {
  avionics: {
    name: 'Avionics',
    path: loc('avionics'),
  },
  aws: {
    name: 'Amazon Web Services',
    path: loc('aws'),
  },
  bash: {
    name: 'Bash',
    path: loc('bash'),
  },
  bootstrap: {
    name: 'Bootstrap',
    path: loc('bootstrap'),
  },
  css: {
    name: 'CSS',
    path: loc('css'),
  },
  cypress: {
    name: 'Cypress',
    path: loc('cypress'),
  },
  docker: {
    name: 'Docker',
    path: loc('docker'),
  },
  drone: {
    name: 'Drone',
    path: loc('drone'),
  },
  express: {
    name: 'Express',
    path: loc('express'),
  },
  git: {
    name: 'Git',
    path: loc('git'),
  },
  github: {
    name: 'GitHub',
    path: loc('github'),
  },
  gmail: {
    name: 'Gmail',
    path: loc('gmail'),
  },
  graphql: {
    name: 'GraphQL',
    path: loc('graphql'),
  },
  handlebars: {
    name: 'Handlebars',
    path: loc('handlebars'),
  },
  heroku: {
    name: 'Heroku',
    path: loc('heroku'),
  },
  html: {
    name: 'HTML',
    path: loc('html'),
  },
  javascript: {
    name: 'JavaScript',
    path: loc('javascript'),
  },
  jest: {
    name: 'Jest',
    path: loc('jest'),
  },
  jfrog: {
    name: 'jFrog',
    path: loc('jfrog'),
  },
  jquery: {
    name: 'jQuery',
    path: loc('jquery'),
  },
  kubernetes: {
    name: 'Kubernetes',
    path: loc('kubernetes'),
  },
  link: {
    name: 'Link',
    path: loc('link'),
  },
  linkedin: {
    name: 'LinkedIn',
    path: loc('linkedin'),
  },
  materialize: {
    name: 'Materialize',
    path: loc('materialize'),
  },
  mongodb: {
    name: 'MongoDB',
    path: loc('mongodb'),
  },
  mongoose: {
    name: 'Mongoose',
    path: loc('mongoose'),
  },
  mui: {
    name: 'MUI',
    path: loc('mui'),
  },
  mysql: {
    name: 'MySQL',
    path: loc('mysql'),
  },
  netlify: {
    name: 'Netlify',
    path: loc('netlify'),
  },
  next: {
    name: 'Next',
    path: loc('next'),
  },
  node: {
    name: 'Node',
    path: loc('node'),
  },
  pillar: {
    name: 'Pillar',
    path: loc('pillar'),
  },
  postgresql: {
    name: 'Postgresql',
    path: loc('postgresql'),
  },
  react: {
    name: 'React',
    path: loc('react'),
  },
  redux: {
    name: 'Redux',
    path: loc('redux'),
  },
  sequelize: {
    name: 'Sequelize',
    path: loc('sequelize'),
  },
  tailwind: {
    name: 'Tailwind',
    path: loc('tailwind'),
  },
  typescript: {
    name: 'TypeScript',
    path: loc('typescript'),
  },
  uw: {
    name: 'UW',
    path: loc('uw'),
  },
  vercel: {
    name: 'Vercel',
    path: loc('vercel'),
  },
  vite: {
    name: 'Vite',
    path: loc('vite'),
  },
  mocha: {
    name: 'Mocha',
    path: loc('mocha'),
  },
  chai: {
    name: 'Chai',
    path: loc('chai'),
  },
  webpack: {
    name: 'Webpack',
    path: loc('webpack'),
  },
  codepen: {
    name: 'Codepen',
    path: loc('codepen'),
  },
};
