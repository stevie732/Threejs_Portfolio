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
  meta,
  starbucks,
  tesla,
  shopify,
  portfolio,
  threejs,
  currency,
  poke_api,
  tetris,
  pokemon,
  bookfair,
  animeapi,
  steviegpt,
  XORA,
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
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Currency API",
    description:
      "A personal portfolio website displaying the talent and bio of a creative artist. It provides in detail who they are, what they do, and the services that they provide.",
    tags: [
      {
        name: "nextjs",
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
    image: currency,
    source_code_link: "https://github.com/stevie732/next.js_stevie732.git",
    web_link: "https://stephenprahl.vercel.app"
  },
    {
    name: "Portfolio",
    description:
      "A personal portfolio website displaying the talent and bio of a creative artist. It provides in detail who they are, what they do, and the services that they provide.",
    tags: [
      {
        name: "nextjs",
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
    image: portfolio,
    source_code_link: "https://github.com/stevie732/next.js_stevie732.git",
    web_link: "https://stephenprahl.vercel.app"
  },
    {
    name: "Pokemon API",
    description:
      "A personal portfolio website displaying the talent and bio of a creative artist. It provides in detail who they are, what they do, and the services that they provide.",
    tags: [
      {
        name: "nextjs",
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
    image: poke_api,
    source_code_link: "https://github.com/stevie732/next.js_stevie732.git",
    web_link: "https://stephenprahl.vercel.app"
  },
    {
    name: "Tetris",
    description:
      "A personal portfolio website displaying the talent and bio of a creative artist. It provides in detail who they are, what they do, and the services that they provide.",
    tags: [
      {
        name: "nextjs",
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
    image: tetris,
    source_code_link: "https://github.com/stevie732/next.js_stevie732.git",
    web_link: "https://stephenprahl.vercel.app"
  },
    {
    name: "Pokemon Website",
    description:
      "A personal portfolio website displaying the talent and bio of a creative artist. It provides in detail who they are, what they do, and the services that they provide.",
    tags: [
      {
        name: "nextjs",
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
    image: pokemon,
    source_code_link: "https://github.com/stevie732/next.js_stevie732.git",
    web_link: "https://stephenprahl.vercel.app"
  },
    {
    name: "Bookfair Website",
    description:
      "A personal portfolio website displaying the talent and bio of a creative artist. It provides in detail who they are, what they do, and the services that they provide.",
    tags: [
      {
        name: "nextjs",
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
    image: bookfair,
    source_code_link: "https://github.com/stevie732/next.js_stevie732.git",
    web_link: "https://stephenprahl.vercel.app"
  },
    {
    name: "Anime Website API",
    description:
      "A personal portfolio website displaying the talent and bio of a creative artist. It provides in detail who they are, what they do, and the services that they provide.",
    tags: [
      {
        name: "nextjs",
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
    source_code_link: "https://github.com/stevie732/next.js_stevie732.git",
    web_link: "https://stephenprahl.vercel.app"
  },
    {
    name: "StevieGPT",
    description:
      "A personal portfolio website displaying the talent and bio of a creative artist. It provides in detail who they are, what they do, and the services that they provide.",
    tags: [
      {
        name: "nextjs",
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
    image: steviegpt,
    source_code_link: "https://github.com/stevie732/next.js_stevie732.git",
    web_link: "https://stephenprahl.vercel.app"
  },
    {
    name: "XORA SaaS",
    description:
      "A personal portfolio website displaying the talent and bio of a creative artist. It provides in detail who they are, what they do, and the services that they provide.",
    tags: [
      {
        name: "nextjs",
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
    image: XORA,
    source_code_link: "https://github.com/stevie732/next.js_stevie732.git",
    web_link: "https://stephenprahl.vercel.app"
  },
];

export { services, technologies, experiences, testimonials, projects };
