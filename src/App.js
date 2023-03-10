import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

import Navbar from "../src/components/header/Navbar";
import Home from "../src/components/home/Home";
import AboutMe from "../src/components/about-me/AboutMe";
import MyWork from "../src/components/my-work/MyWork";
import ContactMe from "../src/components/contact-me/ContactMe";
import Footer from "../src/components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/my-work" element={<MyWork />} />
          <Route path="/contact-me" element={<ContactMe />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
