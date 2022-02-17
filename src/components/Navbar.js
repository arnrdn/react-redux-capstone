import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { faAngleLeft, faMicrophone, faGear } from '@fortawesome/free-solid-svg-icons';

const Navbar = (props) => {
  const { home } = props;
  return (
    <div className="navbar">
      <div className="navbar-content">
        <Link to="/">
          <div className="back">
            <FontAwesomeIcon icon={faAngleLeft} />
          </div>
        </Link>
        {home
        && (
          <div className="name">
            Stock Companies
          </div>
        )}
        {!home
        && (
        <div className="name">
          Company Information
        </div>
        )}
        <div className="adds">
          <FontAwesomeIcon icon={faMicrophone} />
          <FontAwesomeIcon icon={faGear} />
        </div>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  home: PropTypes.bool,
}.isRequired;

export default Navbar;
