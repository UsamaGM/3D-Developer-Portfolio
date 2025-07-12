import "./index.css";
import LogoSection from "./sections/LogoSection";
import NavBar from "./components/NavBar";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import FeatureCards from "./components/FeatureCards";
import ExperienceSection from "./sections/ExperienceSection";
import TechStack from "./sections/TechStack";
import Qualifications from "./sections/Qualifications";
import ContactSection from "./sections/ContactSection";
import Footer from "./sections/Footer";

export function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <ShowcaseSection />
      <LogoSection />
      <FeatureCards />
      <ExperienceSection />
      <TechStack />
      <Qualifications />
      <ContactSection />
      <Footer />
    </>
  );
}

export default App;
