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
      { opacity: 1, duration: 1.5 }
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
        }
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
                Developed a MERN + TypeScript platform integrating Gemini 2.0
                Flash API to auto-generate and grade interview questions in real
                time.
              </p>
              <div className="flex justify-between">
                <a
                  className="text-blue-400 hover:underline hover:text-blue-500 cursor-pointer"
                  href="https://interview-ai-wine.vercel.com"
                >
                  Live Demo
                </a>
                <a
                  className="text-blue-400 hover:underline hover:text-blue-500 cursor-pointer"
                  href="https://github.com/UsamaGM/InterviewAI"
                >
                  View Source Code
                </a>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={project2}>
              <div className="image-wrapper bg-[#ffefdb]">
                <img src={project2Img} alt="TaskManager" />
              </div>
              <h2>
                Task Management with Projects and Teams and a Kanban style task
                enforcement
              </h2>
            </div>
            <div className="project" ref={project3}>
              <div className="image-wrapper bg-[#ffe7eb]">
                <img src={project3Img} alt="ChatMe" />
              </div>
              <h2>
                A realtime chatting application with individual and group
                messaging, message reactions and notifications
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ShowcaseSection;
