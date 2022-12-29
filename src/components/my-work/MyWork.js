import Projects from "../projects/Projects";

import myWorkPic from "../../assets/my-work/myWork.jpg";

import "./MyWork.css";

// Abbreviations: {horiz: horizontal, vert: vertical}
const MyWork = (props) => {
  return (
    <section className="my-work">
      <div className="horiz-left vert-up">
        <img src={myWorkPic} alt="Work space pic" className="work-space-pic" />
        <h2 className="title">MY WORK</h2>
      </div>
      <Projects />
    </section>
  );
};

export default MyWork;
