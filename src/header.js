import PropTypes from "prop-types";
import styles from "./Style.module.css";

const Header = ({ text }) => {
  return (
    <div>
      <h3 className={styles.header}>{text}</h3>
    </div>
  );
};

Header.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Header;
