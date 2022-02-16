import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

const Header = ({ actives }) => {
  const random = parseInt(Math.random().toString().slice(2, 3), 10);
  const currActive = actives[random];
  return (
    <div>
      <Link
        id={currActive.ticker}
        key={currActive.id}
        to={`/details/${currActive.ticker}`}
      >
        {currActive.companyName}
        {currActive.changes}
        {' '}
        {currActive.price}
        {' '}
        {currActive.ticker}
      </Link>
    </div>
  );
};

Header.propTypes = {
  actives: PropTypes.array,
}.isRequired;

export default Header;
