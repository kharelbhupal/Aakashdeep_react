import "./App.css";
import Header from "./Header";
import Hero from "./Hero";
import Services from "./Services";
import Projects from "./Projects";
import Team from "./Team";
import Contact from "./Contact";

function App() {
  return (
    <>
      <div className="main-container">
        <Header />
        <Hero />
      </div>
      <Services />
      <Projects />
      <Team />
      <Contact />
    </>
  );
}

export default App;
