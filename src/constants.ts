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
import companyLogo8 from "/images/logos/company-logo-8.png";
import companyLogo9 from "/images/logos/company-logo-9.png";
import companyLogo10 from "/images/logos/company-logo-10.png";
import companyLogo11 from "/images/logos/company-logo-11.png";

import seo from "/images/seo.png";
import chat from "/images/chat.png";
import time from "/images/time.png";

import reactImg from "/images/logos/react.png";
import pythonImg from "/images/logos/python.svg";
import nodeImg from "/images/logos/node.png";
import threeImg from "/images/logos/three.png";
import gitImg from "/images/logos/git.svg";

import reactIcon from "/models/react_logo-transformed.glb";
import bunIcon from "/models/bun-transformed.glb";
import nodeIcon from "/models/node-transformed.glb";
import threeIcon from "/models/three.js-transformed.glb";
import gitIcon from "/models/git-svg-transformed.glb";

import exp1 from "/images/exp1.png";
import exp2 from "/images/exp2.png";
import exp3 from "/images/exp3.png";
import logo1 from "/images/logo1.png";
import logo2 from "/images/logo2.png";
import logo3 from "/images/logo3.png";

import client1 from "/images/client1.png";
import client2 from "/images/client2.png";
import client3 from "/images/client3.png";
import client4 from "/images/client4.png";
import client5 from "/images/client5.png";
import client6 from "/images/client6.png";

import insta from "/images/insta.png";
import github from "/images/github.png";
import x from "/images/x.png";
import linkedin from "/images/linkedin.png";

import { ExpCardData, TechStackIcon, TechStackImg, Testimonial } from "./types";

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
    name: "Testimonials",
    link: "#testimonials",
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
  { value: 1.5, suffix: "+", label: "Years of Experience" },
  { value: 200, suffix: "+", label: "Satisfied Clients" },
  { value: 108, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
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
  {
    imgPath: companyLogo8,
  },
  {
    imgPath: companyLogo9,
  },
  {
    imgPath: companyLogo10,
  },
  {
    imgPath: companyLogo11,
  },
];

const abilities = [
  {
    imgPath: seo,
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: chat,
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: time,
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs: TechStackImg[] = [
  {
    name: "React Developer",
    imgPath: reactImg,
  },
  {
    name: "Python Developer",
    imgPath: pythonImg,
  },
  {
    name: "Backend Developer",
    imgPath: nodeImg,
  },
  {
    name: "Interactive Developer",
    imgPath: threeImg,
  },
  {
    name: "Project Manager",
    imgPath: gitImg,
  },
];

const techStackIcons: TechStackIcon[] = [
  {
    name: "React Developer",
    modelPath: reactIcon,
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: bunIcon,
    scale: 2.3,
    rotation: [0.1, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: nodeIcon,
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: threeIcon,
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: gitIcon,
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards: ExpCardData[] = [
  {
    review:
      "Adrian brought creativity and technical expertise to the team, significantly improving our frontend performance. His work has been invaluable in delivering faster experiences.",
    imgPath: exp1,
    logoPath: logo1,
    title: "Frontend Developer",
    date: "January 2023 - Present",
    responsibilities: [
      "Developed and maintained user-facing features for the Hostinger website.",
      "Collaborated closely with UI/UX designers to ensure seamless user experiences.",
      "Optimized web applications for maximum speed and scalability.",
    ],
  },
  {
    review:
      "Adrian’s contributions to Docker's web applications have been outstanding. He approaches challenges with a problem-solving mindset.",
    imgPath: exp2,
    logoPath: logo2,
    title: "Full Stack Developer",
    date: "June 2020 - December 2023",
    responsibilities: [
      "Led the development of Docker's web applications, focusing on scalability.",
      "Worked with backend engineers to integrate APIs seamlessly with the frontend.",
      "Contributed to open-source projects that were used with the Docker ecosystem.",
    ],
  },
  {
    review:
      "Adrian’s work on Appwrite’s mobile app brought a high level of quality and efficiency. He delivered solutions that enhanced our mobile experience & meet our product goals.",
    imgPath: exp3,
    logoPath: logo3,
    title: "React Native Developer",
    date: "March 2019 - May 2020",
    responsibilities: [
      "Built cross-platform mobile apps using React Native, integrating with Appwrite's backend services.",
      "Improved app performance and user experience through code optimization and testing.",
      "Coordinated with the product team to implement features based on feedback.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: logo1,
  },
  {
    name: "logo2",
    imgPath: logo2,
  },
  {
    name: "logo3",
    imgPath: logo3,
  },
];

const testimonials: Testimonial[] = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: client1,
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: client3,
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: client2,
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: client5,
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: client4,
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: client6,
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
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
