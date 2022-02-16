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
    id: PropTypes.string,
    companyName: PropTypes.string,
    changes: PropTypes.number,
    price: PropTypes.string,
    ticker: PropTypes.string,
  }).isRequired,
};

export default HomeCard;
