import ecommcerce from '../assets/projects/ecommerce.jpg'
import zingmp3 from '../assets/projects/zingmp3.jpg'
import portfolio from '../assets/projects/portfolio.jpg'
import trello from '../assets/projects/trello.jpg'
export const projects = [
  {
    id: 1,
    image: ecommcerce,
    title: 'DIGITAL WORD',
    description:
      ' DigitalWorld is a website specializing in selling technology items such as phones, laptops, tablets, watches, etc. To help users with shopping needs know detailed information about the item and then make appropriate choices. Give me any product that the user wants.',
    link: '/123',
    status: 'Unfinished'
  },
  {
    id: 2,
    image: zingmp3,
    title: 'Zingmp3 Clone',
    description:
      'This is a small project that i can do in my free time.Based on the available interface, I tried to clone the website again to improve myself,most of the features have been completed, only a few pages can not be completed because there is no API as well as copyright issues',
    link: 'https://zingmp3-clone-mu.vercel.app/',
    status: 'Finished'
  },
  {
    id: 3,
    image: trello,
    title: 'Trello',
    description:
      ' Trello is a process management tool for a project or a plan that users want to manage their work. Currently in the process of being completed.',
    link: 'https://zingmp3-clone-mu.vercel.app/',
    status: 'Unfinished'
  },
  {
    id: 4,
    image: portfolio,
    title: 'Portfolio',
    description: 'This is my information, including Tech skills, experience and the list goes on...',
    link: '',
    status: 'Unfinished'
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
    text: 'Porject',
    to: '#project'
  },
  {
    id: 4,
    text: 'Contact',
    to: '#contact'
  }
]
