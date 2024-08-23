import css from '../assets/tech/css.png';
import git from '../assets/tech/git.png';
import aws from '../assets/tech/aws.png';
import java from '../assets/tech/java.png';
import html from '../assets/tech/html.png';
import dart from '../assets/tech/dart.png';
import django from '../assets/tech/django.png';
import python from '../assets/tech/python.png';
import flutter from '../assets/tech/flutter.png';
import reactjs from '../assets/tech/reactjs.png';
import mongodb from '../assets/tech/mongodb.png';
import angular from '../assets/tech/angular.png';
import tailwind from '../assets/tech/tailwind.png';
import firebase from '../assets/tech/firebase.png';
import javascript from '../assets/tech/javascript.png';
import { frontend, backend, ux, prototyping, komikult, leaderboard, math, movie, nyeusi, GrantThornton, VisoPay, Polibuzz, Knotters, Pillar } from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'experience',
    title: 'Experience',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Full Stack Developer',
    icon: ux,
  },
  {
    title: 'Data Analyst',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    imageUrl: html,
  },
  {
    name: 'CSS 3',
    imageUrl: css,
  },
  {
    name: 'JavaScript',
    imageUrl: javascript,
  },
  {
    name: 'Python',
    imageUrl: python,
  },
  {
    name: 'Dart',
    imageUrl: dart,
  },
  {
    name: 'Java',
    imageUrl: java,
  },
  {
    name: 'Tailwind CSS',
    imageUrl: tailwind,
  },
  {
    name: 'Angular JS',
    imageUrl: angular,
  },
  {
    name: 'React JS',
    imageUrl: reactjs,
  },
  {
    name: 'Django',
    imageUrl: django,
  },
  {
    name: 'Flutter',
    imageUrl: flutter,
  },
  {
    name: 'Firebase',
    imageUrl: firebase,
  },
  {
    name: 'AWS',
    imageUrl: aws,
  },
  {
    name: 'MongoDB',
    imageUrl: mongodb,
  },
  {
    name: 'Git',
    imageUrl: git,
  },
  // {
  //   name: 'Figma',
  //   imageUrl: figma,
  // },
];

const experiences = [
  {
    title: 'Co-Founder, CTO',
    company_name: 'Polibuzz',
    imageURL: Polibuzz,
    iconBg: '#333333',
    date: 'Febuary 2023 - Present',
    description: "Co-founded and served as the Chief Technology Officer (CTO) of Polibuzz, a social media platform dedicated to Indian political discourse. Spearheaded the end-to-end development of the Polibuzz Android app, which is now live on the Play Store, overseeing everything from ideation to deployment. My role also involves strategic decision-making around technology stack choices, feature prioritization, and future scalability planning, aiming to drive user engagement and platform growth.",
  },
  {
    title: 'Back End Developer Intern',
    company_name: 'Knotters',
    imageURL: Knotters,
    iconBg: '#333333',
    date: 'March 2023 - April 2023',
    description: "I worked as a Backend Developer intern at Knotters, where I played a key role in the development of their core platform and several upcoming projects. Leveraging Django to build and maintain APIs, ensuring efficient data management and retrieval. Integrated MongoDB for flexible and scalable database solutions, and utilized Redis for optimizing caching mechanisms. My work also involved extensive use of Postman API for testing",
  },
  {
    title: 'Data Analyst Intern',
    company_name: '3Pillar Global',
    imageURL: Pillar,
    iconBg: '#333333',
    date: 'June 2023 - July 2023',
    description: "I interned as a Data Analyst at 3Pillar Global, where I developed and refined machine learning models for recommendation systems. Key projects included a Music Recommendation System with advanced metric customization and Spotify integration, enabling personalized music suggestions, and playback, directly within the app. Additionally, I engineered a Movie Recommendation System utilizing machine learning to suggest movies and tv shows, and it also provides analysis based on sentiments of the reviews on a particular movie/ tv show and similarity metrics. ",
  },
  {
    title: 'Co-Founder, CTO',
    company_name: 'VisoPay',
    imageURL: VisoPay,
    iconBg: '#333333',
    date: 'Febuary 2024 - Present',
    description: "Co-founded and serving as the Chief Technology Officer (CTO) of VisoPay, a payments app providing an all-in-one ecosystem for facilitating easy payments across retail outlets. My role also involves strategic decision-making around technology stack choices, feature prioritization, and future scalability planning, aiming to drive user engagement and platform growth.",
  },
  {
    title: 'Front-End Developer',
    company_name: 'Grant Thornton',
    imageURL: GrantThornton,
    iconBg: '#333333',
    date: 'June 2024 - Present',
    description: "As an intern at Grant Thornton, I was responsible for developing an administrative dashboard for the Learning Portal of Grant Thornton, focusing on enhancing workflow management and user administration. Designed and implemented the dashboard from the ground up, ensuring a responsive and user-friendly interface. Integrated dynamic data visualization features, allowing for real-time tracking of learning metrics and key performance indicators. Worked closely with the Learning Solutions team to gather requirements and provide technical insights, ensuring the final product aligned with the organizations goals. Engaged in iterative development, thoroughly testing an",
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'KomiKult',
    description: 'A comic characters list app that displays Marvel characters.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: komikult,
    repo: 'https://github.com/',
    demo: 'https://main.d31bvgu2v6xl02.amplifyapp.com/',
  },
  {
    id: 'project-2',
    name: 'Leaderboard',
    description:
      'A leaderboard list app that displays scores submitted by different players.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: leaderboard,
    repo: 'https://github.com/',
    demo: 'https://',
  },
  {
    id: 'project-3',
    name: 'Math Magicians',
    description: 'This is a single-page calculator app built with React',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: math,
    repo: 'https://github.com/',
    demo: '',
  },
  {
    id: 'project-4',
    name: 'Movie Metro',
    description: `A single-page application that allows users to search for any movie or show's ratings and its details.`,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: movie,
    repo: 'https://github.com',
    demo: '',
  },
  {
    id: 'project-5',
    name: 'Nyeusi Fest Site',
    description:
      'This is a demo concert website for a music festival called Nyeusi.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: nyeusi,
    repo: 'https://github.com/',
    demo: '',
  },
];

export { services, technologies, experiences, projects };
