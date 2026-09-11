import kitzaImg from "../assets/images/kitza.jpg";
import fixaImg from "../assets/images/Fixa.jpg";
import cocaColaImg from "../assets/images/cocacola.jpg";
import loginImg from "../assets/images/login.jpg";
import portfolioImg from "../assets/images/customportfolio.jpg";
import budgetImg from "../assets/images/budgetapp.jpg";

const projects = [
  {
    id: 1,
    title: "Kitza",
    category: "FULL-STACK",
    description:
      "Football jersey e-commerce platform with authentication, cart, orders and database integration.",
    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
    ],
    image: kitzaImg,
    live: "https://kitza.vercel.app/",
    github: "#",
  },

  {
    id: 2,
    title: "Custom Portfolio",
    category: "FRONTEND",
    description:
      "Modern responsive developer portfolio focused on clean design and project presentation.",
    tech: [
      "React",
      "Tailwind CSS",
      "Framer Motion",
    ],
    image: portfolioImg,
    live: "https://bashaar2.vercel.app/",
    github: "#",
  },

  {
    id: 3,
    title: "FIXA Furniture",
    category: "FRONTEND",
    description:
      "Modern furniture e-commerce interface with product browsing and shopping-focused UI.",
    tech: [
      "React",
      "CSS Modules",
      "React Router",
    ],
    image: fixaImg,
    live: "https://nexskill-assignment-nxg7.vercel.app/",
    github: "#",
  },

  {
    id: 4,
    title: "Coca-Cola",
    category: "FRONTEND",
    description:
      "Responsive Coca-Cola themed landing page built with HTML, CSS and Tailwind CSS.",
    tech: [
      "HTML",
      "CSS",
      "Tailwind CSS",
    ],
    image: cocaColaImg,
    live: "https://coca-cola-amber.vercel.app/",
    github: "#",
  },

  {
    id: 5,
    title: "Login Interface",
    category: "FRONTEND",
    description:
      "Clean responsive authentication interface with a modern visual layout.",
    tech: [
      "React",
      "CSS",
      "JavaScript",
    ],
    image: loginImg,
    live: "https://react-loginn-main.vercel.app/",
    github: "#",
  },

  {
    id: 6,
    title: "Budget App",
    category: "FRONTEND",
    description:
      "Budget management interface designed for tracking and organizing expenses.",
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
    ],
    image: budgetImg,
    live: "https://budget-app-drab-seven.vercel.app/",
    github: "#",
  },
];

export default projects;