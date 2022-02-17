import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const HomeCard = (props) => {
  const {
    active: {
      companyName,
      changes,
      price,
      ticker,
    },
  } = props;

  return (
    <li>
      <div className="name">
        <h2>{companyName}</h2>
        {' '}
        <span>{ticker}</span>
      </div>
      <div className="finance-stuff">
        <div className="price">
          <b>$</b>
          {' '}
          {price}
        </div>
        <div className="changes">
          {changes > 0 ? (<FontAwesomeIcon className="arrow" icon={faChevronUp} color="green" />)
            : (<FontAwesomeIcon className="arrow" icon={faChevronDown} color="red" />)}
          {changes}
        </div>
      </div>
    </li>
  );
};

HomeCard.propTypes = {
  active: PropTypes.shape({
    companyName: PropTypes.string,
    changes: PropTypes.number,
    price: PropTypes.string,
    ticker: PropTypes.string,
  }).isRequired,
};

export default HomeCard;
