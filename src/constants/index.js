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
import { frontend, backend, ux, prototyping, komikult, leaderboard, math, movie, GrantThornton, VisoPay, Polibuzz, Knotters, Pillar } from '../assets';

export const navLinks = [
  { id: 'about', title: 'About', },
  { id: 'projects', title: 'Projects', },
  { id: 'experience', title: 'Experience', },
  { id: 'contact', title: 'Contact', },
];

const services = [
  { title: 'Frontend Developer', icon: frontend, },
  { title: 'Backend Developer', icon: backend, },
  { title: 'Full Stack Developer', icon: ux, },
  { title: 'Data Analyst', icon: prototyping, },
];

const technologies = [
  { name: 'HTML 5', imageUrl: html, },
  { name: 'CSS 3', imageUrl: css, },
  { name: 'JavaScript', imageUrl: javascript, },
  { name: 'Python', imageUrl: python, },
  { name: 'Dart', imageUrl: dart, },
  { name: 'Java', imageUrl: java, },
  { name: 'Tailwind CSS', imageUrl: tailwind, },
  { name: 'Angular JS', imageUrl: angular, },
  { name: 'React JS', imageUrl: reactjs, },
  { name: 'Django', imageUrl: django, },
  { name: 'Flutter', imageUrl: flutter, },
  { name: 'Firebase', imageUrl: firebase, },
  { name: 'AWS', imageUrl: aws, },
  { name: 'MongoDB', imageUrl: mongodb, },
  { name: 'Git', imageUrl: git, },
];

const experiences = [
  {
    title: 'Co-Founder, CTO',
    company_name: 'Polibuzz',
    imageURL: Polibuzz,
    iconBg: '#333333',
    date: 'Febuary 2023 - Present',
    description: `
    • Co-founded Polibuzz, a social media platform for Indian political discourse.
    • Overseeing technological development and implementation from ideation to deployment.
    • Involved in both technical leadership and strategic business planning.
    • Prioritized feature development and planning for future scalability.
    • Involved in creating both web and android apps from scratch.
    `,
  },
  {
    title: 'Back End Developer Intern',
    company_name: 'Knotters',
    imageURL: Knotters,
    iconBg: '#333333',
    date: 'March 2023 - April 2023',
    description: `
    • Worked as a Backend Developer intern at Knotters, where I played a key role in the development of their core platform and some upcoming projects
    • Leveraging Django to build and maintain APIs, ensuring efficient data management and retrieval
    • Integrated MongoDB for flexible and scalable database solutions, and utilized Redis for optimizing caching mechanisms.
    `,
  },
  {
    title: 'Data Analyst Intern',
    company_name: '3 Pillar Global',
    imageURL: Pillar,
    iconBg: '#333333',
    date: 'June 2023 - July 2023',
    description: `My primary focus was on development and refinement of various machine learning models. Some of which included a movie recommendation system, which used sentiment analysis in order to recommend similar movies/ tv shows, a music recommendation system with advanced metric customization and in app music-playback.`,
  },
  {
    title: 'Co-Founder, CTO',
    company_name: 'VisoPay',
    imageURL: VisoPay,
    iconBg: '#333333',
    date: 'Febuary 2024 - Present',
    description: `
    • Co-founded VisoPay, an all-in-one payments app for retail outlets.
    • Overseeing technological development and implementation by making strategic decisions on technology stack choices.
    • Involved in both technical leadership and strategic business planning.
    • Prioritized feature development and planning for future scalability.
    • Involved in creating both web and android apps from scratch.
    `,
  },
  {
    title: 'Front-End Developer',
    company_name: 'Grant Thornton',
    imageURL: GrantThornton,
    iconBg: '#333333',
    date: 'June 2024 - Present',
    description: `
    • Developed an administrative dashboard for the Learning Portal of Grant Thornton Bharat, for streamlining data collection and processing.
    • Improved workflow management and user administration.
    • Designed and implemented a responsive, user-friendly interface from scratch.
    • Integrated real-time data visualization for learning metrics and KPIs.
    • Conducted iterative development with thorough testing and debugging.
    • Delivered a high-quality, scalable solution that streamlined administrative tasks
    `,
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Virtual Assistant',
    description: 'A Python-based virtual assistant, similar to Google Assistant, Alexa, or Cortana. Designed to handle a variety of tasks through voice commands. ',
    tags: [
      { name: 'react', color: 'blue-text-gradient', },
      { name: 'mongodb', color: 'green-text-gradient', },
      { name: 'tailwind', color: 'pink-text-gradient', },
    ],
    image: komikult,
    repo: 'https://github.com/Divy611/Virtual-Assistant',
    demo: '',
  },
  {
    id: 'project-2',
    name: 'Music Recommendation System',
    description:
      'This system uses various music metrics as input to suggest songs tailored to the given metric values. Additionally, the system is integrated with Spotify, allowing users to play the recommended songs directly from the user interface.',
    tags: [
      { name: 'react', color: 'blue-text-gradient' },
      { name: 'restapi', color: 'green-text-gradient' },
      { name: 'scss', color: 'pink-text-gradient' },
    ],
    image: leaderboard,
    repo: 'https://github.com/Divy611/Music-Recommendation-System',
    demo: '',
  },
  {
    id: 'project-3',
    name: 'Math Magicians',
    description: 'This is a single-page calculator app built with React',
    tags: [
      { name: 'nextjs', color: 'blue-text-gradient', },
      { name: 'supabase', color: 'green-text-gradient', },
      { name: 'css', color: 'pink-text-gradient', },
    ],
    image: math,
    repo: 'https://github.com/',
    demo: 'https://github.com/Divy611/Swift-Shop',
  },
  {
    id: 'project-4',
    name: 'Movie Metro',
    description: `A single-page application that allows users to search for any movie or show's ratings and its details.`,
    tags: [
      { name: 'nextjs', color: 'blue-text-gradient', },
      { name: 'supabase', color: 'green-text-gradient', },
      { name: 'css', color: 'pink-text-gradient', },
    ],
    image: movie,
    repo: 'https://github.com/Divy611/Face-Detection-and-Recognition',
    demo: '',
  },
];

export { services, technologies, experiences, projects };
