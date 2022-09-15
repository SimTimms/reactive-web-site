import { ICard } from '../modules/module-grid-card/interface/ICard';
import { ssa, vmi, noble, savidant } from '../assets';
import aws from './skills/aws.png';
import azure from './skills/azure.png';
import bitbucket from './skills/bitbucket.png';
import css from './skills/css.png';
import devops from './skills/devops.png';
import github from './skills/github.png';
import gql from './skills/gql.png';
import html from './skills/html.png';
import js from './skills/js.png';
import mongo from './skills/mongo.png';
import mui from './skills/mui.png';
import mysql from './skills/mysql.png';
import node from './skills/node.png';
import php from './skills/php.png';
import react from './skills/react.png';
import sql from './skills/sql.png';
import three from './skills/three.png';
import wp from './skills/wp.png';
import ts from './skills/ts.png';

export const skillCards: ICard[] = [
  {
    name: 'Typescript',
    bgColor: 'f2bd68',
    image: ts,
    bold: 'Typescript!',
    text: `This is my new favourite thing. While I'm fairly new to TS I am very confident with it's use.`,
    years: 1,
  },
  {
    name: 'AWS',
    bgColor: 'f2bd68',
    image: aws,
    bold: `Lambda Functions and More`,
    text: `I've deployed react & node apps to Elastic Beanstalk with Route 53 configurations and S3 integrations`,
  },
  {
    name: 'Azure',
    bgColor: 'f2bd68',
    image: azure,
    bold: 'Extensive Azure Experience',
    text: `I've configured and maintained all sorts of Azure components from Service Buses and Event Hubs to App Registrations`,
  },
  {
    name: 'BitBucket',
    bgColor: 'f2bd68',
    image: bitbucket,
    bold: 'A bit of BitBucket',
    text: `I've done some deployments, code management and CI with BitBucket.`,
  },
  {
    name: 'CSS',
    bgColor: 'f2bd68',
    image: css,
    bold: 'Making things pretty!',
    text: `CSS is something I use almost every day, I'm super confident with it.`,
  },
  {
    name: 'DevOps',
    bgColor: 'f2bd68',
    image: devops,
    bold: `Some Azure DevOps Experience`,
    text: 'I used and administrated the team DevOps account while working for the NHS. As well as dashboards, wikis, I configured Pipelines and managed multiple repos',
  },
  {
    name: 'Git & GitHub',
    bgColor: 'f2bd68',
    image: github,
    bold: `Yeah, well, it's not so simple`,
    text: `Like most devs I use git and GitHub almost every working day, I'm comfortable with console commands, the desktop app and the website. I haven't used all the new features and don't actively keep up-to-date with what GitHub are up to but I hear they're coming for our jobs with some AI coding stuff.`,
  },
  {
    name: 'GraphQL & Apollo',
    bgColor: 'f2bd68',
    image: gql,
    bold: 'Enough to make functional APIs',
    text: `I've built at least 10 APIs with GraphQL and connected them to React Apps with Apollo. I'm not a specialist and could probably improve my skills with some additional learning. I can setup JWT authentication and connections to MongoDB.`,
  },
  {
    name: 'HTML',
    bgColor: 'f2bd68',
    image: html,
    bold: `How it all began`,
    text: `I built basic HTML sites for 2 years before getting into PHP and JS`,
  },
  {
    name: 'Javascript',
    bgColor: 'f2bd68',
    image: js,
    bold: `Not the trendy new stuff`,
    text: `No, I used Vanilla JS and AJAX for about 6 years before discovering there were things called "frameworks"`,
  },
  {
    name: 'MongoDB',
    bgColor: 'f2bd68',
    image: mongo,
    bold: `I can get a DB up and running`,
    text: `MongoDB is nice, I like it and can work well with it. It's great for prototyping and MVPs. I'm comfortable with queries, mutations, schemas, models and aggregates.`,
  },
  {
    name: 'MUI',
    bgColor: 'purple',
    image: mui,
    bold: `All the time`,
    text: `MUI has been my go-to styling option for React apps, I need to update some of my skills from v4 to v5.`,
  },
  {
    name: 'MySQL',
    bgColor: 'purple',
    image: mysql,
    bold: `I can handle some MySQL`,
    text: `I built and maintained MySQL database for 5 years, I don't enjoy it but if needs must I can setup up DBs and right MySQL statements`,
  },
  {
    name: 'Node',
    bgColor: 'purple',
    image: node,
    bold: `I did some in-depth Node learning`,
    text: `But I don't remember a lot of it! I can build Node apps and use it for APIs with GraphQL. While I can comfortably build and maintain node apps I struggle a bit with explaining the technical aspects.`,
  },
  {
    name: 'PHP',
    bgColor: 'purple',
    image: php,
    bold: `Not any more`,
    text: `I worked with PHP for 5 years, I couldn't stand the Composer logo and I don't like working with it. If needed though I can jump back into PHP to fix issues.`,
  },
  {
    name: 'React',
    bgColor: 'purple',
    image: react,
    bold: `Changed My Life!`,
    text: `After years of Vanilla JS I jumped into React and became a proper web developer. I love it, it makes sense (mostly) and it works.`,
  },
  {
    name: 'SQL',
    bgColor: 'purple',
    image: sql,
    bold: `Moving on......`,
    text: `I've used SQL infrequently, sometimes for clients and once for the NHS. It's very rigid with doesn't fit with my foot-loose and fancy free development style. I can, and have (begrudgingly) worked successfully with SQL.`,
  },
  {
    name: 'Three',
    bgColor: 'purple',
    image: three,
    bold: `3D in a website? Say Whaaaat!?`,
    text: `I built a pretty awesome application with Three.js, it lets users paint 3d miniatures, I also built some 3d wordpress plugins and other nik-naks.`,
  },
  {
    name: 'WordPress',
    bgColor: 'purple',
    image: wp,
    bold: `Fast and Dirty`,
    text: `I don't mind WordPress, I built a lot of sites with WordPress and Elementor, but please, please, please, update your plugins, PHP and WP installations all the time or it will get hacked.`,
  },
];
