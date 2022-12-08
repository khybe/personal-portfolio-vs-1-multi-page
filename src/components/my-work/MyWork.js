import Projects from "../projects/Projects";

import myWorkPic from "../../assets/my-work/myWork.jpg";

import "./MyWork.css";

// Abbreviations: {dt: desktop, mb: mobile}
const MyWork = (props) => {
  return (
    <section className="my-work">
      <div className="dt-left mb-up">
        <img src={myWorkPic} alt="Work space pic" className="work-space-pic" />
        <h2 className="title">MY WORK</h2>
      </div>
      <Projects />
    </section>
  );
};

export default MyWork;
