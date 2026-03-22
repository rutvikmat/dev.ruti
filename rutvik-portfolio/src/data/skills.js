import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaGithub,
  FaDocker,
  FaAws,
} from "react-icons/fa";

import {
  SiDjango,
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiFirebase,
  SiTailwindcss,
  SiRedux,
  SiExpress,
  SiSpringboot,
  SiTensorflow,
  SiPytorch,
  SiVercel,
  SiNetlify,
} from "react-icons/si";

const skills = [
  {
    category: "Frontend",
    description: "Modern UI development",
    items: [
      { name: "React.js", icon: FaReact, level: 90 },
      { name: "Next.js", icon: SiNextdotjs, level: 85 },
      { name: "JavaScript", icon: SiJavascript, level: 90 },
      { name: "TypeScript", icon: SiTypescript, level: 80 },
      { name: "Tailwind", icon: SiTailwindcss, level: 85 },
      { name: "Redux", icon: SiRedux, level: 75 },
    ],
  },

  {
    category: "Backend",
    description: "APIs & system design",
    items: [
      { name: "Node.js", icon: FaNodeJs, level: 85 },
      { name: "Express.js", icon: SiExpress, level: 85 },
      { name: "Django", icon: SiDjango, level: 90 },
      { name: "Spring Boot", icon: SiSpringboot, level: 75 },
      { name: "REST APIs", icon: null, level: 90 },
      { name: "Microservices", icon: null, level: 75 },
    ],
  },

  {
    category: "Databases",
    description: "Data & queries",
    items: [
      { name: "MongoDB", icon: SiMongodb, level: 85 },
      { name: "MySQL", icon: SiMysql, level: 90 },
      { name: "PostgreSQL", icon: SiPostgresql, level: 80 },
      { name: "Firebase", icon: SiFirebase, level: 75 },
    ],
  },

  {
    category: "DevOps & Cloud",
    description: "Deployment & infra",
    items: [
      { name: "Docker", icon: FaDocker, level: 75 },
      { name: "AWS", icon: FaAws, level: 70 },
      { name: "Vercel", icon: SiVercel, level: 90 },
      { name: "Netlify", icon: SiNetlify, level: 85 },
    ],
  },

  {
    category: "AI / ML",
    description: "Intelligent systems",
    items: [
      { name: "Python ML", icon: FaPython, level: 85 },
      { name: "TensorFlow", icon: SiTensorflow, level: 70 },
      { name: "PyTorch", icon: SiPytorch, level: 70 },
      { name: "AI Integration", icon: null, level: 85 },
    ],
  },

  {
    category: "Tools",
    description: "Workflow & productivity",
    items: [
      { name: "GitHub", icon: FaGithub, level: 90 },
      { name: "VS Code", icon: null, level: 95 },
      { name: "Postman", icon: null, level: 85 },
    ],
  },
];

export default skills;