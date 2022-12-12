import React from "react";

import "./Home.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

// Abbreviations: {bg: background, diag: diagonal, vert: vertical}
const Home = () => {
  return (
    <section className="home">
      <div className="k">
        <div className="vert-line"></div>
        <div className="diag-1"></div>
        <div className="diag-2"></div>
      </div>
      <div className="contents">
        <div className="card-bg"></div>
        <div className="card-contents">
          <h2 className="hello">
            &#60; Hello,<span>I am</span> &#62;
          </h2>
          <h1>KHAIBAR SAADAT</h1>
          <h2 className="detail">&#60; A front-end developer &#62;</h2>
        </div>
        <div className="links">
          <a href="">
            <FaLinkedin />
            <span>Linkedin</span>
          </a>
          <a href="https://github.com/khybe" target="_blank" rel="noreferrer">
            <FaGithub />
            <span>github</span>
          </a>
        </div>
      </div>
      <div className="quote">
        <q>
          <em>
            Programming isn't about what you know; it's about what you can
            figure out.
          </em>
        </q>
        <p>-Chris Pine</p>
      </div>
    </section>
  );
};

export default Home;
