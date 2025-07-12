import { GlowCardProps } from "@/types";
import { useRef } from "react";
import star from "/images/star.png";

function GlowCard(props: GlowCardProps) {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleMouseMove = (index: number) => (e: React.MouseEvent) => {
    const card = cardRefs.current[index];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;

    let angle = (Math.atan2(mouseY, mouseX) * 180) / Math.PI;
    angle = (angle + 360) % 360;

    card.style.setProperty("--start", `${angle}`); // Remove the +60 offset
  };

  return (
    <div
      ref={(el) => {
        cardRefs.current[props.index] = el;
      }}
      onMouseMove={handleMouseMove(props.index)}
      className="card timeline-card rounded-xl p-0.25 mb-5 break-inside-avoid-column"
    >
      <div className="card-border rounded-xl p-10">
        <div className="glow" />
        <div className="flex items-center gap-1 mb-5">
          {Array.from({ length: 5 }, (_, i) => (
            <img key={i} src={star} alt="star" className="size-5" />
          ))}
        </div>
        <div className="mb-5">
          <p className="text-white-50 text-lg">{props.card.review}</p>
        </div>
        {props.children}
      </div>
    </div>
  );
}

export default GlowCard;
