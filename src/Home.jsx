import { useEffect } from "react";

import Hero from "./Hero";
import Services from "./Services";
import Projects from "./Projects";
import Team from "./Team";
import Contact from "./Contact";

export default function Home() {
  useEffect(() => {
    if (window.location.hash === "#contact") {
      setTimeout(() => {
        document.getElementById("contact")?.scrollIntoView({
          behavior: "smooth",
        });
      }, 200);
    }
  }, []);

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
