import { TitleHeaderProps } from "@/types";

function TitleHeader(props: TitleHeaderProps) {
  return (
    <div className="flex flex-col items-center gap-5">
      <div className="hero-badge">
        <p>{props.subtitle}</p>
      </div>
      <div className="font-semibold md:text-5xl text-3xl text-center">
        {props.title}
      </div>
    </div>
  );
}

export default TitleHeader;
