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
import { frontend, backend, ux, prototyping, komikult, leaderboard, math, Ebix, movie, GrantThornton, VisoPay, Polibuzz, Knotters, Pillar } from '../assets';

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
    title: 'Co-Founder',
    company_name: 'Polibuzz',
    imageURL: Polibuzz,
    iconBg: '#333333',
    date: 'Febuary 2023 - January 2024',
    description: [
      'Co-founded Polibuzz, a social media platform for Indian political discourse',
      'Overseeing technological development and implementation from ideation to deployment',
      'Involved in both technical leadership and strategic business planning',
      'Prioritized feature development and planning for future scalability',
      'Involved in creating both web and android apps from scratch',
    ]
  },
  {
    title: 'Back End Developer Intern',
    company_name: 'Knotters',
    imageURL: Knotters,
    iconBg: '#333333',
    date: 'March 2023 - April 2023',
    description: [
      'Worked as a Backend Developer intern at Knotters, where I played a key role in the development of their core platform and some upcoming projects',
      'Leveraging Django to build and maintain APIs, ensuring efficient data management and retrieval',
      'Integrated MongoDB for flexible and scalable database solutions, and utilized Redis for optimizing caching mechanisms',
    ]
  },
  {
    title: 'Data Analyst Intern',
    company_name: '3Pillar Global',
    imageURL: Pillar,
    iconBg: '#333333',
    date: 'June 2023 - July 2023',
    description: [
      'Developed and fine-tuned machine learning models for a movie recommendation system powered by Flask for the backend and a simple HTML frontend, and a music recommendation system with Streamlit for a dynamic user interface.',
      'Implemented various machine learning techniques such as collaborative filtering, k-nearest neighbors (KNN), and decision trees to generate personalized recommendations.',
      'Integrated features like in-app music playback, enhancing user interaction with both systems.'
    ],
  },
  {
    title: 'Co-Founder',
    company_name: 'VisoPay',
    imageURL: VisoPay,
    iconBg: '#333333',
    date: 'Febuary 2024 - November 2024',
    description: [
      'Co-founded VisoPay, an all-in-one payments app for retail outlets',
      'Overseeing technological development and implementation by making strategic decisions on technology stack choices',
      'Involved in both technical leadership and strategic business planning',
      'Prioritized feature development and planning for future scalability',
      'Involved in creating both web and android apps from scratch',
    ]
  },
  {
    title: 'Front-End Developer Intern',
    company_name: 'Grant Thornton',
    imageURL: GrantThornton,
    iconBg: '#333333',
    date: 'June 2024 - September 2024',
    description: [
      'Developed an administrative dashboard for the Learning Portal of Grant Thornton Bharat, for streamlining data collection and processing',
      'Improved workflow management and user administration',
      'Designed and implemented a responsive, user-friendly interface from scratch',
      'Integrated real-time data visualization for learning metrics and KPIs',
      'Conducted iterative development with thorough testing and debugging',
      'Delivered a high-quality, scalable solution that streamlined administrative tasks',
    ]
  },
  {
    title: 'Application Developer Intern',
    company_name: 'EbixCash',
    imageURL: Ebix,
    iconBg: '#333333',
    date: 'January 2025 - April 2025',
    description: [
      'Worked on the development of mobile applications, aimed at supporting the future products of the company.',
      'Assisted in building and optimizing mobile app features to enhance user experience and support product growth.',
      'Collaborated with senior developers to ensure smooth integration of new features and functionality within the app.'
    ]
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Virtual Assistant',
    description: 'A Python-based virtual assistant, similar to Google Assistant, Alexa, or Cortana. Designed to handle a variety of tasks through voice commands. ',
    tags: [
      { name: 'Python', color: 'blue-text-gradient', },
    ],
    image: 'https://www.nitcoinc.com/static/1f794df56b9d96b278d638e49b7fc5bc/a7715/d7c4e4a1ba24f91814baa734f9486088.jpg',
    repo: 'https://github.com/Divy611/Virtual-Assistant',
    demo: '',
  },
  {
    id: 'project-2',
    name: 'Music Recommendation System',
    description:
      'This system uses various music metrics as input to suggest songs tailored to the given metric values. Additionally, the system is integrated with Spotify, allowing users to play the recommended songs directly from the user interface.',
    tags: [
      { name: 'Python', color: 'blue-text-gradient' },
    ],
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe_PdX-a46C0JsYym-Yh_VeRCzqXAhicpu5g&s',
    repo: 'https://github.com/Divy611/Music-Recommendation-System',
    demo: '',
  },
  {
    id: 'project-3',
    name: 'SwiftShop',
    description: 'A cross-platform E-Commerce mobile application using Flutter, designed to offer users a seamless shopping experience.',
    tags: [
      { name: 'Flutter', color: 'blue-text-gradient', },
      { name: 'Firebase', color: 'green-text-gradient', },
    ],
    image: 'https://salestechstar.com/wp-content/uploads/2019/12/shopping-apps-1024x579.jpg',
    repo: 'https://github.com/',
    demo: 'https://github.com/Divy611/Swift-Shop',
  },
  {
    id: 'project-4',
    name: 'Face Recognition System',
    description: `A system built with Python and OpenCV. It can detect and recognize faces within the camera frame in real-time, provided that the faces have been previously registered in the dataset`,
    tags: [
      { name: 'python', color: 'blue-text-gradient', }
    ],
    image: 'https://zd-brightspot.s3.us-east-1.amazonaws.com/wp-content/uploads/2021/03/17102614/shutterstock_1456783511.jpg',
    repo: 'https://github.com/Divy611/Face-Detection-and-Recognition',
    demo: '',
  },
];

export { services, technologies, experiences, projects };
