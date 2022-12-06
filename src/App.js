import "./App.css";

import Navbar from "../src/components/header/Navbar";
import Home from "../src/components/home/Home";
import AboutMe from "../src/components/about-me/AboutMe";
import Footer from "../src/components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        {/* <Home /> */}
        <AboutMe />
      </main>
      <Footer />
    </div>
  );
}

export default App;
