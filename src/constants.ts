import ideas from "/images/ideas.svg";
import concepts from "/images/concepts.svg";
import designs from "/images/designs.svg";
import code from "/images/code.svg";

import companyLogo1 from "/images/logos/company-logo-1.png";
import companyLogo2 from "/images/logos/company-logo-2.png";
import companyLogo3 from "/images/logos/company-logo-3.png";
import companyLogo4 from "/images/logos/company-logo-4.png";
import companyLogo5 from "/images/logos/company-logo-5.png";
import companyLogo6 from "/images/logos/company-logo-6.png";
import companyLogo7 from "/images/logos/company-logo-7.png";

import seo from "/images/seo.png";
import chat from "/images/chat.png";
import time from "/images/time.png";

import reactIcon from "/models/react_logo-transformed.glb";
import tsIcon from "/models/typescript-transformed.glb";
import tailwindIcon from "/models/tailwindcss-transformed.glb";
import bunIcon from "/models/bun-transformed.glb";
import nodeIcon from "/models/node-transformed.glb";
import mongoIcon from "/models/mongodb-transformed.glb";
import threeIcon from "/models/three.js-transformed.glb";
import gitIcon from "/models/git-svg-transformed.glb";

import exp1 from "/images/exp1.png";
import exp2 from "/images/exp2.png";
import exp3 from "/images/exp3.png";
import logo1 from "/images/logo1.png";
import logo2 from "/images/logo2.png";
import logo3 from "/images/logo3.png";

import profileImg from "/images/logos/profile.png";
import aicpBadge from "/images/logos/aicp.png";
import cloudBadge from "/images/logos/gcloud.png";
import google from "/images/logos/google.png";
import react from "/images/logos/react.png";
import girlscript from "/images/logos/girlscript.png";
import sibau from "/images/logos/sibau.png";

import insta from "/images/insta.png";
import github from "/images/logos/github.png";
import linkedin from "/images/linkedin.png";

import { ExpCardData, TechStackIcon, Qualification } from "./types";

const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Qualifications",
    link: "#qualifications",
  },
];

const words = [
  { text: "Ideas", imgPath: ideas },
  { text: "Concepts", imgPath: concepts },
  { text: "Designs", imgPath: designs },
  { text: "Code", imgPath: code },
  { text: "Ideas", imgPath: ideas },
  { text: "Concepts", imgPath: concepts },
  { text: "Designs", imgPath: designs },
  { text: "Code", imgPath: code },
];

const counterItems = [
  { value: 1, suffix: "+", label: "Years of Experience" },
  { value: 5, suffix: "+", label: "Satisfied Clients" },
  { value: 10, suffix: "+", label: "Completed Projects" },
  { value: 80, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: companyLogo1,
  },
  {
    imgPath: companyLogo2,
  },
  {
    imgPath: companyLogo3,
  },
  {
    imgPath: companyLogo4,
  },
  {
    imgPath: companyLogo5,
  },
  {
    imgPath: companyLogo6,
  },
  {
    imgPath: companyLogo7,
  },
];

const abilities = [
  {
    imgPath: seo,
    title: "Problem Solver",
    desc: "Approaching challenges with a logical mindset and delivering practical solutions, especially in full-stack and AI-integrated systems.",
  },
  {
    imgPath: chat,
    title: "Clear Communication",
    desc: "Providing consistent updates and progress reports to maintain transparency and alignment.",
  },
  {
    imgPath: time,
    title: "Consistent Delivery",
    desc: "Meeting deadlines while ensuring code quality, clean structure, and proper documentation.",
  },
];

const techStackIcons: TechStackIcon[] = [
  {
    name: "React JS",
    modelPath: reactIcon,
    scale: 1,
    rotation: [0, 0, 0],
  },
  { name: "TypeScript", modelPath: tsIcon, rotation: [0, 0, 0], scale: 1.5 },
  {
    name: "Bun JS",
    modelPath: bunIcon,
    scale: 2.2,
    rotation: [0.2, 0, 0],
  },
  {
    name: "Node.js + Express",
    modelPath: nodeIcon,
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "MongoDB & Mongoose",
    modelPath: mongoIcon,
    scale: 3,
    rotation: [0, 0, 0],
  },
  {
    name: "TailwindCSS",
    modelPath: tailwindIcon,
    scale: 1.5,
    rotation: [0, 0, 0],
  },
  {
    name: "Three JS",
    modelPath: threeIcon,
    scale: 0.05,
    rotation: [Math.PI / 5, 0, 0],
  },
  {
    name: "Git & Project Management",
    modelPath: gitIcon,
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards: ExpCardData[] = [
  {
    review:
      "During GSSoC, Usama made meaningful open-source contributions and participated in valuable collaborative discussions with mentors and other developers.",
    imgPath: companyLogo6,
    logoPath: girlscript,
    title: "Contributor – GirlScript Summer of Code",
    date: "October 2024 – November 2024",
    responsibilities: [
      "Submitted PRs to open-source web projects, fixing bugs and adding features.",
      "Participated in mentorship sessions to improve code quality.",
      "Practiced Git workflows and issue tracking in real-world repositories.",
    ],
  },
  {
    review:
      "As an executive member at Sukkur IBA CS Society, Usama played a key role in organizing impactful tech events. His programming competition initiative was particularly well-received.",
    imgPath: companyLogo7,
    logoPath: sibau,
    title: "Executive Member – Computer Science Society, Sukkur IBA",
    date: "November 2024 – May 2025",
    responsibilities: [
      "Planned and executed Speed Programming Competitions on campus.",
      "Contributed to organizing SIBAFest, a university-wide flagship event.",
      "Collaborated with student leaders to manage logistics and outreach.",
    ],
  },
  {
    review:
      "Usama demonstrated strong leadership and organizational skills as Campus Lead at AICP. His ability to coordinate teams and drive engagement was key to the success of several national-level webinars and events.",
    imgPath: companyLogo5,
    logoPath: aicpBadge,
    title: "Campus Lead – Artificial Intelligence Community of Pakistan",
    date: "December 2024 – Present",
    responsibilities: [
      "Organized and hosted monthly AI webinars featuring industry professionals.",
      "Led a diverse student team, promoting collaboration and community building.",
      "Increased engagement and AI awareness within the student body.",
    ],
  },
];

const qualifications: Qualification[] = [
  {
    name: "Usama Mangi",
    mentions: "Full-Stack Developer",
    review:
      "I may not have a long client list yet — but I build with clarity, care, and clean code. My goal is always to make the tech invisible and the experience seamless.",
    imgPath: profileImg,
  },
  {
    name: "Campus Lead – AICP",
    mentions: "2025",
    review:
      "Selected as the first-ever Campus Lead from Sukkur IBA, representing national AI initiative in Pakistan.",
    imgPath: aicpBadge,
  },
  {
    name: "Google Cloud Skills Boost",
    mentions: "Gold League - 3rd Place",
    review:
      "Ranked 3rd in the Gold League of Google Cloud Skills Boost. Consistently placed in Bronze, Silver, Gold, and Diamond leagues through hands-on cloud labs and challenges.",
    imgPath: cloudBadge,
  },
  {
    name: "AISeekho by Google Cloud",
    mentions: "Jan 2025 – Feb 2025",
    review:
      "Completed a curated series of AI and cloud computing modules with Google Cloud, including image classification, TensorFlow models, and multimodal RAG systems.",
    imgPath: google,
  },
  {
    name: "Frontend Developer (React)",
    mentions: "Coursera – Meta",
    review:
      "Mastered React fundamentals and advanced patterns through hands-on projects, including routing, state management, and component design.",
    imgPath: react,
  },
  {
    name: "MERN Essential Training",
    mentions: "LinkedIn Learning",
    review:
      "Completed a comprehensive MERN stack course covering MongoDB, Express.js, React.js, and Node.js with real-world project deployment.",
    imgPath: linkedin,
  },
  {
    name: "React: Creating and Hosting a Full-Stack Site",
    mentions: "LinkedIn Learning",
    review:
      "Learned to build and deploy a full-stack web app with React and Express, using Heroku and Netlify for hosting and environment setup.",
    imgPath: linkedin,
  },
  {
    name: "GirlScript Summer of Code",
    mentions: "Contributor – Oct 2024",
    review:
      "Contributed to real open-source web projects and collaborated with mentors during GSSoC'24. Submitted multiple PRs and practiced real-world Git workflows.",
    imgPath: girlscript,
  },
  {
    name: "Speed Programming – SIBAU",
    mentions: "Organized twice",
    review:
      "Led and organized the Speed Programming Competition at Sukkur IBA, promoting hands-on coding skills and competitive problem-solving culture.",
    imgPath: sibau,
  },
];

const socialImgs = [
  {
    name: "linkedin",
    url: "https://linkedin.com/in/usama-mangi",
    imgPath: linkedin,
  },
  {
    name: "github",
    url: "https://github.com/UsamaGM",
    imgPath: github,
  },
  {
    name: "insta",
    url: "https://instagram.com/usamamangi.gm",
    imgPath: insta,
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  qualifications,
  socialImgs,
  techStackIcons,
  navLinks,
};
