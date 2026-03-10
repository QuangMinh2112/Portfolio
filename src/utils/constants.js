import ecommcerce from '../assets/projects/ecommerce.jpg'
import zingmp3 from '../assets/projects/zingmp3.jpg'
import portfolio from '../assets/projects/portfolio.jpg'
import trello from '../assets/projects/trello.jpg'
import billiard from '../assets/projects/billiard.png'
export const projects = [
  {
    id: 1,
    image: billiard,
    title: 'TauHai – Pool Stats Dashboard',
    description:
      'A real-time billiard (pool) statistics dashboard. Frontend built with React & TypeScript; backend powered by Bun.js + Elysia.js REST API and PostgreSQL database. Features live match tracking, player rankings, and responsive data visualizations.',
    link: 'https://tauhai.vercel.app/',
    status: 'Finished',
    year: 2025,
    tags: ['React', 'TypeScript', 'Bun.js', 'Elysia.js', 'PostgreSQL']
  },
  {
    id: 2,
    image: ecommcerce,
    title: 'DigitalWorld – E-Commerce',
    description:
      'Full-stack e-commerce platform specializing in tech products (phones, laptops, tablets, watches). Features product filtering, cart management, user authentication, and an admin dashboard for inventory management.',
    link: 'https://digital-world-2-client.vercel.app/',
    status: 'Finished',
    year: 2022,
    tags: ['React', 'Node.js', 'MongoDB', 'Express']
  },
  {
    id: 3,
    image: zingmp3,
    title: 'ZingMP3 Clone',
    description:
      "A pixel-perfect clone of Vietnam's top music streaming platform. Built to sharpen my frontend skills — includes music player with controls, playlist management, trending charts, and smooth animations.",
    link: 'https://zingmp3-clone-mu.vercel.app/',
    status: 'Finished',
    year: 2022,
    tags: ['React', 'Redux', 'SCSS', 'REST API']
  },
  {
    id: 4,
    image: trello,
    title: 'Trello Clone',
    description:
      'A Kanban-style project management tool inspired by Trello. Features drag-and-drop boards, real-time card updates, column management, and team collaboration. Built with a full MERN stack.',
    link: 'https://trello-web-quang-minh.vercel.app/',
    status: 'Finished',
    year: 2023,
    tags: ['React', 'Node.js', 'MongoDB', 'DnD']
  },
  {
    id: 5,
    image: portfolio,
    title: 'Portfolio v2',
    description:
      'My personal portfolio website showcasing projects, skills, and experience. Built with React + Vite, featuring smooth animations, dark/light mode, and a responsive layout optimized for all devices.',
    link: '/',
    status: 'Finished',
    year: 2024,
    tags: ['React', 'Vite', 'SCSS', 'Responsive']
  }
]

export const menus = [
  {
    id: 1,
    text: 'Home',
    to: '#home'
  },
  {
    id: 2,
    text: 'About',
    to: '#about'
  },
  {
    id: 3,
    text: 'Project',
    to: '#project'
  },
  {
    id: 4,
    text: 'Contact',
    to: '#contact'
  }
]
