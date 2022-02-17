import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import img from '../img/details.svg';

const DetailHero = ({
  ticker, name, price, changes,
}) => (
  <div className="hero-detail">
    <div className="hero-content-detail">
      <div className="info">
        <div className="detail-name">
          <h1>{name}</h1>
          <span>{ticker}</span>
        </div>
        <div className="detail-hero-finance">
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
      </div>
      <img
        className="hero-img"
        src={img}
        alt="person looking at graphs"
      />
    </div>
  </div>
);

DetailHero.propTypes = {
  ticker: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  changes: PropTypes.number,
}.isRequired;

export default DetailHero;
