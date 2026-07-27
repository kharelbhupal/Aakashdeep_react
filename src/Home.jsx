import Hero from "./Hero";
import Services from "./Services";
import Projects from "./Projects";
import Team from "./Team";
import Contact from "./Contact";

export default function Home() {
  return (
    <>
      <div className="main-container">
        <Hero />
      </div>

      <Services />
      <Projects />
      <Team />
      <Contact />
    </>
  );
}
