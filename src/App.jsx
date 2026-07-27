import { Routes, Route } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import Social from "./Social";

import Home from "./Home";
import AllServices from "./AllServices";
import Portfolio from "./Portfolio";

function App() {
  return (
    <>
      {/* Header appears on every page */}
      <div className="navbar">
        <Header />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<AllServices />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>

      {/* Footer appears on every page */}
      <Footer />
      <Social />
    </>
  );
}

export default App;
