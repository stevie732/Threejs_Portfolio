import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
  bookfair,
  animeapi,
  XORA,
  Executive,
  Freelance,
  MTR,
  Software,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Fullstack Developer",
    company_name: "Executive Enterprise",
    icon: Executive,
    iconBg: "#383E56",
    date: "March 2019 - September 2024",
    points: [
      "Developed predictive models using Python, achieving an 85% accuracy rate for customer churn analysis.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Bult UI/UX, performed error-handling, and maintained company website.",
    ],
  },
  {
    title: "Fullstack Developer",
    company_name: "Freelance Contract",
    icon: Freelance,
    iconBg: "#E6DEDD",
    date: "Jun 2022 - Dec 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "My expertise in creating scalable, user-friendly web applications aligned with the client'sneed for a modern and efficient application.",
      "Build server actions using Next.js 14's new server components feature.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Backend Developer",
    company_name: "MTR Mechanical",
    icon: MTR,
    iconBg: "#383E56",
    date: "Feb 2020 - Aug 2021",
    points: [
      "Used Python to maintain the backend of the company website.",
      "Provided expertise in error handling, debugging platform related issues.",
      "While using RESTful API's, made sure the company remained online.",
      "Implemented PostgreSQL to input data for financial revenue and information.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "WickedAI",
    icon: Software,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - May 2023",
    points: [
      "My ability to design and implement scalable API's combined with strong database management expertise allowed the client to streamline their operations and enhance user experience.",
      "Built modern React SaaS applications using a component base architecture and React-specific libraries for enhanced functionality.",
      "Took the role of a Frontend Developer/Engineer, building out a professional SaaS landing page with modern web technologies and best practice.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Stephen proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Executive Enterprise",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Stephen does.",
    name: "Chris Brown",
    designation: "COO",
    company: "MTR Mechanical",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Stephen optimized our website, our traffic increased by 50%. We can't thank him enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "WickedAI",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
    {
    name: "Bookfair Website",
    description:
      "A fullstack project involving flask, python, and bootstrap. Also acts as an api in which secrets, and tokens are applied along with postgresql.",
    tags: [
      {
        name: "Flask",
        color: "orange-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "pink-text-gradient",
      },
    ],
    image: bookfair,
    source_code_link: "https://github.com/stevie732/Flask-Bookfair.git",
    web_link: "https://bookfair-cww7.onrender.com"
  },
    {
    name: "Anime Discover",
    description:
      "This project was built using nextjs and is an anime comic book cover application that fetches them using an API.",
    tags: [
      {
        name: "Nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: animeapi,
    source_code_link: "https://github.com/stevie732/Anime-Discovery.git",
    web_link: "https://anime-api-three-black.vercel.app"
  },
    {
    name: "XORA SaaS",
    description:
      "A software as a service(SaaS) application applying a fullstack approach using nextjs, typescript, and tailwind.",
    tags: [
      {
        name: "Nextjs",
        color: "orange-text-gradient",
      },
      {
        name: "TypeScript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: XORA,
    source_code_link: "https://github.com/stevie732/XORA_SaaS.git",
    web_link: "https://xora-saas-one.vercel.app"
  },
];

export { services, technologies, experiences, testimonials, projects };
