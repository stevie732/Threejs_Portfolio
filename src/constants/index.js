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
  Panpalz,
  Executive,
  Fiverr,
  Upwork,
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
    title: "React Native Developer",
    company_name: "Panpalz",
    icon: Panpalz,
    iconBg: "#E6DEDD",
    date: "December 2024 - January 2025",
    points: [
      "Built cross-platform interfaces with React-Native and Expo, contributing to company standards while exploring personal growth.",
      "Optimized and maintained continuous workflow while recognized as a resillient problem-solver and high-impact performer committed to excellence.",
      "Demonstrated resilience, versatility, and unwavering commitment exceeding expectations, earning a reputation for being a reliable problem-solver and high-impact performer.",
      "Empowered junior and senior developers with expert guidance and support, driving innovation and excellence across frontend and backend projects.",
      "Excelled in a dynamic, high-pressure environment by rapidly adapting to shifting priorities, managing heavy workloads with precision, consistently delivering exceptional outcomes.",
    ],
  },
  {
    title: "Fullstack Developer",
    company_name: "Executive Enterprise",
    icon: Executive,
    iconBg: "#E6DEDD",
    date: "March 2019 - September 2024",
    points: [
      "Utilized Python and machine learning methodologies to construct and deploy predictive models for customer churn, leading to a significant imporvement in customer retention.",
      "Achieved an 85% accuracy rate in identifying at-risk customers, enabling proactive retention strategies and driving a substantial increase in customer lifetime value.",
      "Crafted intuitive user interfaces with React and Bootstrap, increasing user satisfaction by 20%.",
      "Engineered real-time solutions for business-critical issues, boosting system reliability and cutting downtime by 30%.",
      "Partnered with cross-functional teams to ensure timely and budget-conscious project completion.",
    ],
  },
  {
    title: "Fullstack Developer",
    company_name: "Fiverr",
    icon: Fiverr,
    iconBg: "#E6DEDD",
    date: "Feb 2020 - Aug 2021",
    points: [
      "Devised scalable APIs and databases using MongoDB to enhance operational efficiency.",
      "Constructed React-bases SaaS applications employing component-driven architecture, boosting user engagement by 15%.",
      "Spearheaded the development of a high-conversion SaaS landing page, achieving a 20% conversion rate.",
      "Applied responsive design principles for an optimal cross-device user experience.",
      "Kept pace with emerging frontend technologies and industry advancements to ensure continuous professional growth.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Upwork",
    icon: Upwork,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - May 2023",
    points: [
      "Delivered tailored web applications for clients using NextJS and its server components.",
      "Oversaw ongoing maintenance to ensure peak performance and user satisfaction.",
      "Balanced multiple projects with efficient time management and organizational skills.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Stephen was an inspiration to our team, he is a hard, and creative worker who does exceptionally well under pressure in a high pace environment. We were lucky to have him onboard with Panpalz.",
    name: "Sofia S",
    designation: "Tech Lead",
    company: "Panpalz",
    image: "https://randomuser.me/api/portraits/women/21.jpg",
  },
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
    designation: "CEO",
    company: "Fiverr",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Stephen optimized our website, our traffic increased by 50%. We can't thank him enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "Upwork",
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
