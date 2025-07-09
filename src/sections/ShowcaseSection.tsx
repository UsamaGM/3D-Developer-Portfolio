import project1Img from "/images/project1.png";

function ShowcaseSection() {
  return (
    <div id="work" className="app-showcase">
      <div className="w-full">
        <div className="showcase-layout">
          {/* Left */}
          <div className="first-project-wrapper">
            <div className="image-wrapper">
              <img src={project1Img} alt="Project 1" />
            </div>
            <div className="text-content">
              <h2>
                AI based Interview management, sheduling, assessment, grading,
                and recommending system
              </h2>
              <p className="text-white-50 md:text-xl"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowcaseSection;
