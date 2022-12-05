import "./App.css";

import Navbar from "../src/components/header/Navbar";
import Home from "../src/components/home/Home";
import Footer from "../src/components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;
