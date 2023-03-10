import React from "react";

import "./Projects.css";
import Project from "./Project";

import pigGame from "../../assets/my-work/myWorkPigGame.png";
import guessMyNumber from "../../assets/my-work/myWorkGuessMyNumber.png";
import simonSays from "../../assets/my-work/myWorkSimonSays.png";
import comingSoon from "../../assets/my-work/myWorkComingSoon.jpg";
import { AiOutlineDown } from "react-icons/ai";

const projectsList = [
  {
    id: "p2",
    name: "Guess My Number",
    image: guessMyNumber,
    githubLink: "https://github.com/khybe/guess-my-number",
  },
  {
    id: "p1",
    name: "Pig Game",
    image: pigGame,
    githubLink: "https://github.com/khybe/pig-game",
  },
  {
    id: "p3",
    name: "Simon Says",
    image: simonSays,
    githubLink: "https://github.com/khybe/Simon-says",
  },
  { id: "p4", name: "Coming Soon", image: comingSoon, githubLink: "" },
  { id: "p5", name: "Coming Soon", image: comingSoon, githubLink: "" },
  { id: "p6", name: "Coming Soon", image: comingSoon, githubLink: "" },
];

// Abbreviations: {horiz: horizontal, vert: vertical}
const Projects = () => {
  return (
    <div className="horiz-right vert-down">
      <div className="projects">
        {projectsList.map((project) => (
          <Project
            key={project.id}
            image={project.image}
            name={project.name}
            githubLink={project.githubLink}
          />
        ))}
      </div>
      <h4 className="scroll-down">Scroll down for more</h4>
      <AiOutlineDown size="2rem" className="scroll-down" />
    </div>
  );
};

export default Projects;
