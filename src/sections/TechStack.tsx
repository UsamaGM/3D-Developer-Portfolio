import TechIcon from "@/components/Models/TechIcon";
import TitleHeader from "@/components/TitleHeader";
import { techStackIcons, techStackImgs } from "@/constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function TechStack() {
  useGSAP(() => {
    gsap.fromTo(
      ".tech-card",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
        stagger: 0.2,
        scrollTrigger: {
          trigger: "#skills",
          start: "top center",
        },
      }
    );
  }, []);

  return (
    <div id="skills" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="My Preferred Tech Stack"
          subtitle="The Skills I Have Mastered"
        />

        <div className="tech-grid">
          {techStackIcons.map((icon) => (
            <div key={icon.name} className="card-border tech-card group">
              <div className="tech-card-animated-bg" />
              <div className="tech-card-content">
                <div className="tech-icon-wrapper">
                  <TechIcon model={icon} />
                </div>
                <div className="padding-x w-full">
                  <p>{icon.name}</p>
                </div>
              </div>
            </div>
          ))}

          {/* {techStackImgs.map((icon) => (
            <div key={icon.name} className="card-border tech-card group">
              <div className="tech-card-content">
                <div className="tech-icon-wrapper">
                  <img src={icon.imgPath} alt="icon" />
                </div>
                <div className="padding-x w-full">
                  <p>{icon.name}</p>
                </div>
              </div>
            </div>
          ))} */}
        </div>
      </div>
    </div>
  );
}

export default TechStack;
