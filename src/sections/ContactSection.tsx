import TitleHeader from "@/components/TitleHeader";
import { ChangeEvent, FormEvent, useRef, useState } from "react";
import arrow from "/images/arrow-right.svg";
import ContactExperience from "@/components/ContactExperience";
import emailjs from "@emailjs/browser";

function ContactSection() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const formRef = useRef<HTMLFormElement>(null);

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);
    try {
      const res = await fetch("/api/env");
      const config: {
        serviceId: string;
        emailTemplateId: string;
        publicKey: string;
      } = await res.json();

      console.log(config.emailTemplateId);

      await emailjs.sendForm(
        config.serviceId,
        config.emailTemplateId,
        formRef.current!,
        config.publicKey
      );

      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      alert("Failed to send email. Give it another try?");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Get in Touch With Me"
          subtitle="Contact Information"
        />
        <div className="mt-16 grid-12-cols">
          {/* Left Side */}
          <div className="xl:col-span-5">
            <div className="flex-center card-border rounded-xl p-10">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-7"
              >
                <div>
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Your email address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message">Message</label>
                  <textarea
                    name="message"
                    id="message"
                    rows={5}
                    placeholder="Your message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type="submit" disabled={loading}>
                  <div className="cta-button group">
                    <div className="bg-circle" />
                    <p className="text">
                      {loading ? "Sending..." : "Send Message"}
                    </p>
                    <div className="arrow-wrapper">
                      <img src={arrow} alt="arrow" className="animate-none" />
                    </div>
                  </div>
                </button>
              </form>
            </div>
          </div>

          {/* Right Side */}
          <div className="xl:col-span-7 min-h-96">
            <div className="w-full h-full bg-[#cd7c2e] hover:cursor-grab rounded-3xl overflow-hidden">
              <ContactExperience />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
