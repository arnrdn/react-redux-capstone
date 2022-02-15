import PropTypes from 'prop-types';

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
      {companyName}
      {changes}
      {' '}
      {price}
      {' '}
      {ticker}
    </li>
  );
};

HomeCard.propTypes = {
  active: PropTypes.shape({
    id: PropTypes.number,
    companyName: PropTypes.string,
    changes: PropTypes.number,
    price: PropTypes.number,
    ticker: PropTypes.string,
  }).isRequired,
};

export default HomeCard;
