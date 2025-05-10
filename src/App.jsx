import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PortfolioPage from "./pages/Portfolio";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          {/* <Route path="/portfolio" element={<PortfolioPage />} /> */}
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
