import desktopBackground from "../../assets/about-me/desktopBackground.jpg";
import mobileBackground from "../../assets/about-me/mobileBackground.jpg";

import "./AboutMe.css";

// Abbreviation: {dt: desktop, mb: mobile, ctr: container}
const AboutMe = (props) => {
  return (
    <section className="about-me">
      <div className="contents-ctr">
        <h2 className="title">ABOUT ME</h2>
        <div className="bio-ctr">
          <div className="bio-bg" />
          <div className="bio">
            <p>
              A self-taught frontend developer with the ability to take on a
              fullstack project.
              <br />
              <br />
              With passion for technology and building dynamic websites, desktop
              and mobile versions, I've spent the last four years learning
              different languages and tools to further improve my skills. So
              far, I've loved it and i don't think the passion to learn more and
              do more will ever end.
              <br />
              <br />
              If you want to learn more about me and my work, please visit my
              workspace or contact me directly and tell me about your project.
            </p>
            <div className="languages">
              <h4>Languages that i use :</h4>
              <p>
                <span>HTML5</span>
                <span>CSS3</span>
                <span>Javascript</span>
                <span>React.js</span>
              </p>
            </div>
            <div className="tools">
              <h4>Tools that i use :</h4>
              <p>
                <span>Terminal</span>
                <span>Text editor: V.S</span>
                <span>Git</span>
                <span>GitHub</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <img
        src={desktopBackground}
        alt="Background for desktop version"
        className="dt-bg"
      />
      <img
        src={mobileBackground}
        alt="Background for mobile version"
        className="mb-bg"
      />
    </section>
  );
};

export default AboutMe;
