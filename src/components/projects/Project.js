import "./Project.css";

const Project = (props) => {
  return (
    <div className="project">
      <figure>
        <img src={props.image} alt="Project 1 Pig game" />
        <figcaption>{props.name}</figcaption>
      </figure>
      <a href={props.githubLink} target="_blank" rel="noreferrer">
        Github
      </a>
    </div>
  );
};

export default Project;
