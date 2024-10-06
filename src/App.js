import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./views/home/Home";
import About from "./views/about/About";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      {/* all routes */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
