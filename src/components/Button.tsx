import { ButtonProps } from "@/types";
import arrowDown from "/images/arrow-down.svg";

function Button(props: ButtonProps) {
  return (
    <a
      onClick={(e) => {
        e.preventDefault();

        const target = document.getElementById("counter");

        if (target && props.id) {
          const offset = window.innerHeight * 0.05;

          const top =
            target.getBoundingClientRect().top + window.scrollY - offset;

          window.scrollTo({ top, behavior: "smooth" });
        }
      }}
      className={`${props.className ?? ""} cta-wrapper`}
    >
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
