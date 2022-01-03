import PropTypes from "prop-types";
import styles from "./Style.module.css";

const Contents = ({ project_img, project_title, project_intro, project_url }) => {
  return (
    <div>
      <h1>{project_title}</h1>
      <div>
        <img src={project_img} alt={project_title} />
      </div>
      <div>
        <span>{project_intro}</span>
      </div>
      <a href={project_url} target="_blank">
        {project_title}
      </a>
    </div>
  );
};

Contents.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Contents;
