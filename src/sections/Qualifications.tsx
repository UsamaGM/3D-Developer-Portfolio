import GlowCard from "@/components/GlowCard";
import TitleHeader from "@/components/TitleHeader";
import { qualifications } from "@/constants";

function Qualifications() {
  return (
    <section id="qualifications" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="My Recent Certifications and Accomplishments"
          subtitle="Qualifications and Certifications"
        />

        <div className="lg:columns-3 md:columns-2 columns-1 mt-16">
          {qualifications.map((testimonial, index) => (
            <GlowCard key={index} card={testimonial} index={index}>
              <div className="flex items-center">
                <img src={testimonial.imgPath} alt={testimonial.name} />
              </div>
              <div>
                <p className="font-bold">{testimonial.name}</p>
                <p className="text-white-50">{testimonial.mentions}</p>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Qualifications;
