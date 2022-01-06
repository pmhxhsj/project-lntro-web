import PropTypes from "prop-types";
import styles from "./Style.module.css";

const Contents = ({ project_img, project_title, project_intro, project_url }) => {
  return (
    <div>
      <h1 className={styles.title}>{project_title}</h1>
      <div>
        <img className={styles.imgWidth} src={project_img} alt={project_title} />
      </div>
      <div>
        <span className={styles.blockSpan}>{project_intro}</span>
      </div>
      Github Link:{" "}
      <a href={project_url} target="_blank">
        {project_title}
      </a>
    </div>
  );
};

export default Contents;
