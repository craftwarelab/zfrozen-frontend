import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./views/home/Home";
import About from "./views/about/About";
import Contact from "./views/contact/Contact";
import Services from "./views/services/Services";
import Career from "./views/career/Career";
import Portfolio from "./views/portfolio/Portfolio";
import JobDetail from "./views/career/JobDetail";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      {/* all routes */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/career" element={<Career />}></Route>
        <Route path="/portfolio" element={<Portfolio />}></Route> 
        <Route path="/job-detail" element={<JobDetail />}></Route>
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
