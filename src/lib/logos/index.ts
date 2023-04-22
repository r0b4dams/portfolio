import aws from "./aws.svg";
import bash from "./bash.svg";
import bootstrap from "./bootstrap.svg";
import css from "./css.svg";
import cypress from "./cypress.svg";
import docker from "./docker.svg";
import drone from "./drone.svg";
import express from "./express.svg";
import git from "./git.svg";
import github from "./github.svg";
import gmail from "./gmail.svg";
import graphql from "./graphql.svg";
import handlebars from "./handlebars.svg";
import heroku from "./heroku.svg";
import html from "./html.svg";
import javascript from "./javascript.svg";
import jest from "./jest.svg";
import jfrog from "./jfrog.svg";
import jquery from "./jquery.svg";
import kubernetes from "./kubernetes.svg";
import link from "./link.svg";
import linkedin from "./linkedin.svg";
import materialize from "./materialize.svg";
import mongodb from "./mongodb.svg";
import mongoose from "./mongoose.svg";
import mui from "./mui.svg";
import mysql from "./mysql.svg";
import netlify from "./netlify.svg";
import next from "./next.svg";
import node from "./node.svg";
import postgresql from "./postgresql.svg";
import react from "./react.svg";
import redux from "./redux.svg";
import sequelize from "./sequelize.svg";
import tailwind from "./tailwind.svg";
import typescript from "./typescript.svg";
import vercel from "./vercel.svg";

interface LogoMap {
  [key: string]: {
    name: string;
    svg: string; // StaticImport
  };
}

export const logos: LogoMap = {
  aws: {
    name: "Amazon Web Services",
    svg: aws,
  },
  bash: {
    name: "Bash",
    svg: bash,
  },
  bootstrap: {
    name: "Bootstrap",
    svg: bootstrap,
  },
  css: {
    name: "CSS",
    svg: css,
  },
  cypress: {
    name: "Cypress",
    svg: cypress,
  },
  docker: {
    name: "Docker",
    svg: docker,
  },
  drone: {
    name: "Drone",
    svg: drone,
  },
  express: {
    name: "Express",
    svg: express,
  },
  git: {
    name: "Git",
    svg: git,
  },
  github: {
    name: "GitHub",
    svg: github,
  },
  gmail: {
    name: "Gmail",
    svg: gmail,
  },
  graphql: {
    name: "GraphQL",
    svg: graphql,
  },
  handlebars: {
    name: "Handlebars",
    svg: handlebars,
  },
  heroku: {
    name: "Heroku",
    svg: heroku,
  },
  html: {
    name: "HTML",
    svg: html,
  },
  javascript: {
    name: "JavaScript",
    svg: javascript,
  },
  jest: {
    name: "Jest",
    svg: jest,
  },
  jfrog: {
    name: "jFrog",
    svg: jfrog,
  },
  jquery: {
    name: "jQuery",
    svg: jquery,
  },
  kubernetes: {
    name: "Kubernetes",
    svg: kubernetes,
  },
  link: {
    name: "Link",
    svg: link,
  },
  linkedin: {
    name: "LinkedIn",
    svg: linkedin,
  },
  materialize: {
    name: "Materialize",
    svg: materialize,
  },
  mongodb: {
    name: "MongoDB",
    svg: mongodb,
  },
  mongoose: {
    name: "Mongoose",
    svg: mongoose,
  },
  mui: {
    name: "MUI",
    svg: mui,
  },
  mysql: {
    name: "MySQL",
    svg: mysql,
  },
  netlify: {
    name: "Netlify",
    svg: netlify,
  },
  next: {
    name: "Next",
    svg: next,
  },
  node: {
    name: "Node",
    svg: node,
  },
  postgresql: {
    name: "Postgresql",
    svg: postgresql,
  },
  react: {
    name: "React",
    svg: react,
  },
  redux: {
    name: "Redux",
    svg: redux,
  },
  sequelize: {
    name: "Sequelize",
    svg: sequelize,
  },
  tailwind: {
    name: "Tailwind",
    svg: tailwind,
  },
  typescript: {
    name: "Typescript",
    svg: typescript,
  },
  vercel: {
    name: "Vercel",
    svg: vercel,
  },
};
