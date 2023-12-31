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
  // carrent,
  // jobit,
  // tripguide,
  threejs,
  summary,
  games,
  whisper,
  clothly,
  paybox,
  logo_1,
  liberty,
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
    title: "UI/UX",
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
    title: "Full stack Developer",
    company_name: "AB3D",
    icon: logo_1,
    iconBg: "#383E56",
    date: "Dec 2020 - July 2021",
    points: [
      "Developed a robust backend using PHP, handling server-side logic and database operations efficiently.",
      "Created a dynamic and user-friendly frontend with PHP, ensuring seamless interaction and a responsive design.",
      "Designed the UI/UX, incorporating modern principles to enhance user engagement and satisfaction.",
      "Expanded the project's reach by building a mobile app using React Native, tailored specifically for artisans.",
      "Demonstrated strong problem-solving skills by successfully managing all aspects of the project independently.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Liberty Assured Limited",
    icon: liberty,
    iconBg: "#E6DEDD",
    date: "Aug 2021 - Present",
    points: [
      "Key contributor in the development of 'WhisperSMS' a successful bulk SMS platform with over 100,000 users across Nigeria and Africa.",
      "Collaborated as a team member to create 'Wisewinn,' an online betting platform featuring various game options.",
      "Co-developed 'Paybox,' an agency banking application that facilitates money transfers, functioning similar to a banking platform.",
      "Proficiently handled maintenance and addressed software fixes for these projects, ensuring optimal performance and user satisfaction.",
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
    name: "Vibe Summarizer",
    description:
      "Web-based platform that simplifies your reading with an open-source article summerizer that transform lengthy articles into clear and concise summaries",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
    ],
    image: summary,
    source_code_link: "https://github.com/EdmundGiwa/vibe-summerizer",
  },
  {
    name: "Whisper SMS",
    description:
      "Web application that enables users send promotional and transactional messages to limitless number of people with instant OTPs, transactional Email notifications, voice OTP, two-way interactions",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Django",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
    ],
    image: whisper,
    source_code_link: "https://whispersms.com",
  },
  {
    name: "Wise Winn",
    description:
      "An online jackpot lottery platform, with amazing game options to win cash prize and others",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "django",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "zustard",
        color: "pink-text-gradient",
      },
    ],
    image: games,
    source_code_link: "https://wisewinn.com/",
  },
  {
    name: "Vibe Clothly",
    description:
      "A web application to Create unique and exclusive shirt with our brand new 3D customization tool. Unleash your imagination and define your style",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongoDB",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },

      {
        name: "express",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
      {
        name: "threeJS",
        color: "green-text-gradient",
      },
    ],
    image: clothly,
    source_code_link: "https://wisewinn.com/",
  },
  {
    name: "PayBox",
    description:
      "A web application to Create unique and exclusive shirt with our brand new 3D customization tool. Unleash your imagination and define your style",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "django",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "zustard",
        color: "pink-text-gradient",
      },
    ],
    image: paybox,
    source_code_link: "https://paybox.biz/",
  },
];

export { services, technologies, experiences, testimonials, projects };
