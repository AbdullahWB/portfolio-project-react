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
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "EECP",
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
    title: "React Developer",
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
    title: "MERN stack development",
    company_name: "Programming Hero, Online",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Jan 2023 - July 2023",
    points: [
      "Here I learned web development MERN sack based.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Application Design",
    company_name: "Creative It Institute, Online",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jun 2022 - Dec 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "B.A (Honours) in English",
    company_name: "Kabi Nazrul Islam College",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2026",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Tuhfa",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Sep 2022 - dec 2022",
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
      "Bootstrap is a popular CSS framework that offers a comprehensive set of pre-designed components and responsive grid systems. It simplifies the process of building responsive and visually appealing websites, saving...",
    // name: "Sara Lee",
    // designation: "CFO",
    // company: "Acme Co",
    // image: "https://randomuser.me/api/portraits/women/4.jpg",
    image: "https://images.opencollective.com/bootstrap/a892851/background.png"
  },
  {
    testimonial:
    "React.js is a JavaScript library for building user interfaces. Its component-based architecture, virtual DOM, and efficient rendering make it an excellent choice for creating interactive and scalable web applications.",
    // name: "Chris Brown",
    // designation: "COO",
    // company: "DEF Corp",
    // image: "https://randomuser.me/api/portraits/men/5.jpg",
    image: "https://i.ytimg.com/vi/x0fSBAgBrOQ/maxresdefault.jpg"
  },
  {
    testimonial:
      "Postman is a versatile tool for testing and documenting APIs. It allows you to send requests, inspect responses, and automate API testing, making it an essential tool for web developers working with backend APIs.",
    // name: "Lisa Wang",
    // designation: "CTO",
    // company: "456 Enterprises",
    // image: "https://randomuser.me/api/portraits/women/6.jpg",
    image: "https://media.geeksforgeeks.org/wp-content/uploads/20230216170349/What-is-an-API.png"
  },
];

const projects = [
  {
    name: "Martial Arts Quest",
    description:
      "Martial Art Quest is a martial art online school. There have 4 types of users Admin, Instructor, Student, and regular users.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Firebase",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/AbdullahWB/Martial-arts-quest-project",
  },
  {
    name: "Bingo Toy",
    description:
      "Bingo Toy is an E-comers website for your kids. Here have 2 type user on kinds of users add, update, show, delete the product, and sell the other is just buy products.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Firebase",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/AbdullahWB/bingo-toy-project",
  },
  {
    name: "Food Master",
    description:
      "Food Master is an E-comers website for every food lover. Here you can see so many types of food and you need to buy this and add it to your cart.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "Firebase",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/AbdullahWB/food-master-project",
  },
];

export { services, technologies, experiences, testimonials, projects };
