import { ButtonProps } from "@/types";
import arrowDown from "/images/arrow-down.svg";

function Button(props: ButtonProps) {
  return (
    <a className={`${props.className ?? ""} cta-wrapper`}>
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{props.text}</p>
        <div className="arrow-wrapper">
          <img src={arrowDown} alt="arrow down" />
        </div>
      </div>
    </a>
  );
}

export default Button;
