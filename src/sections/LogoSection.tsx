import { logoIconsList } from "@/constants";

function LogiIcon({ icon }: { icon: { imgPath: string } }) {
  return (
    <div className="flex-none flex-center marque-item">
      <img src={icon.imgPath} alt="logo icon" />
    </div>
  );
}

function LogoSection() {
  return (
    <div className="md:my-20 my-10 relative">
      <div className="grandient-edge" />
      <div className="grandient-edge" />

      <div className="marquee h-52">
        <div className="marquee-box md:gap-12 gap-5">
          {logoIconsList.map((icon, index) => (
            <LogiIcon key={index} icon={icon} />
          ))}
          {logoIconsList.map((icon, index) => (
            <LogiIcon key={index + logoIconsList.length} icon={icon} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default LogoSection;
