import LogoSection from "./sections/LogoSection";
import NavBar from "./components/NavBar";
import "./index.css";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import FeatureCards from "./components/FeatureCards";

export function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <ShowcaseSection />
      <LogoSection />
      <FeatureCards />
    </>
  );
}

export default App;
