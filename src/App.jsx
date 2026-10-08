import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Social from "./Social";
import ScrollToTop from "./ScrollToTop";
import Home from "./Home";
import AllServices from "./AllServices";
import Portfolio from "./Portfolio";
import AboutUs from "./AboutUs";
import InfoCenter from "./InfoCenter";
import PrivacyPolicy from "./PrivacyPolicy";
import TermsAndConditions from "./TermsAndConditions";
import PageNotFound from "./PageNotFound";

function App() {
  return (
    <>
      {/* Header appears on every page */}
      <div className="navbar">
        <Header />
      </div>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<AllServices />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/info" element={<InfoCenter />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>

      {/* Footer appears on every page */}
      <Footer />
      <Social />
    </>
  );
}

export default App;
