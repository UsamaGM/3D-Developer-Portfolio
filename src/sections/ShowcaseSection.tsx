import { useRef } from "react";
import project1Img from "/images/project1.png";
import project2Img from "/images/project2.png";
import project3Img from "/images/project3.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function ShowcaseSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const project1 = useRef<HTMLDivElement>(null);
  const project2 = useRef<HTMLDivElement>(null);
  const project3 = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 },
    );
    const projects = [project1.current, project2.current, project3.current];
    projects.forEach((project, index) => {
      gsap.fromTo(
        project,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * index,
          scrollTrigger: {
            trigger: project,
            start: "top bottom-=100",
          },
        },
      );
    });
  }, []);

  return (
    <section id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcase-layout">
          {/* Left */}
          <div className="first-project-wrapper" ref={project1}>
            <div className="image-wrapper bg-[#daf0fd]">
              <img src={project1Img} alt="InterviewAI" />
            </div>
            <div className="text-content">
              <h2>AI-Powered Interview Platform</h2>
              <p className="text-white-50 md:text-xl">
                Built a full-stack MERN + TypeScript platform that leverages
                Gemini 2.0 Flash API to dynamically generate, analyze, and grade
                interview questions in real time — streamlining technical
                assessments with AI.
              </p>
              <div className="flex justify-between">
                <a className="project-link" href="https://youtu.be/_ciOg71LkuQ">
                  Live Demo
                </a>
                <a
                  className="project-link"
                  href="https://github.com/UsamaGM/InterviewAI"
                >
                  View Source Code
                </a>
              </div>
            </div>
            <div className="text-lg mt-12">
              “I don’t just write code — I design systems that solve real
              problems. For me, great software is silent, seamless, and
              scalable. Every project is a step toward mastering the craft and
              building something that truly matters.”
            </div>
          </div>

          {/* Right */}
          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={project2}>
              <div className="image-wrapper bg-[#ffefdb]">
                <img src={project2Img} alt="TaskManager" />
              </div>
              <h2>Full-Stack Task Manager Built with Bun.js</h2>
              <div className="flex justify-between">
                <a className="project-link" href="https://youtu.be/InGBcJNQYz0">
                  Live Demo
                </a>
                <a
                  className="project-link"
                  href="https://github.com/UsamaGM/task-manager"
                >
                  View Source Code
                </a>
              </div>
            </div>
            <div className="project" ref={project3}>
              <div className="image-wrapper bg-[#ffe7eb]">
                <img src={project3Img} alt="ChatMe" />
              </div>
              <h2>Real-Time MERN Chat App with Socket.IO</h2>
              <div className="flex justify-between">
                <a
                  className="project-link"
                  href="https://chat-me-wine.vercel.app"
                >
                  Live Demo
                </a>
                <a
                  className="project-link"
                  href="https://github.com/UsamaGM/chat-me"
                >
                  View Source Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ShowcaseSection;
