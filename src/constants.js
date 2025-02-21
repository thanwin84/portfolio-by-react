import careerConnect from './assets/images/careect-connect-home.png';
import porfolio from './assets/images/project-portfolio.png';
import pandaEats from './assets/images/project-pandaeats.png';
export const navLinks = ['ABOUT ME', 'EDUCATION', 'PROJECTS', 'CONTACT'];
export const educationHistory = [
  {
    schoolName: "Chang'an University",
    durationYear: '2023-Present',
    department: 'Computer Science and Technology',
  },
  {
    schoolName: 'Ningbo University of Technology',
    durationYear: '2017-2022',
    department: 'Computer Science and Technology',
  },
];

export const projects = [
  {
    title: 'Career Connect',
    description:
      'Full-stack job search platform with custom UI components, 2FA via Twilio, user authentication, job search, profile management, and admin dashboard.',
    liveDemoLink: 'https://career-connect-frontend-1kvx.onrender.com',
    repoLink: 'https://github.com/thanwin84/career-connect',
    imgUrl: careerConnect,
  },
  {
    title: 'Porfolio',
    description:
      'Showcase of my projects and skills with a responsive design, interactive elements, and smooth animations.',
    liveDemoLink: 'https://career-connect-frontend-1kvx.onrender.com',
    repoLink: 'https://github.com/thanwin84/career-connect',
    imgUrl: porfolio,
  },
  {
    title: 'PandaEats',
    description:
      'Developed a responsive full-stack food ordering application with Auth0 authentication, real-time order tracking and  Stripe payments.',
    liveDemoLink: 'https://mern-pandaeats-frontend.onrender.com',
    repoLink: 'https://github.com/thanwin84/pandaeats-frontend',
    imgUrl: pandaEats,
  },
];
