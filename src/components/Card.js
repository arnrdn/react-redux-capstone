import PropTypes from 'prop-types';

const Card = (props) => {
  const {
    detail: {
      id, calendarYear, symbol, fillingDate, acceptedDate, netIncome,
    },

  } = props;
  return (
    <li>
      {id}
      {' '}
      {calendarYear}
      {' '}
      {symbol}
      {' '}
      {fillingDate}
      {' '}
      {acceptedDate}
      {' '}
      {netIncome}
    </li>
  );
};

Card.propTypes = {
  detail: PropTypes.shape({
    id: PropTypes.number,
    calendarYear: PropTypes.number,
    fillingDate: PropTypes.number,
    acceptedDate: PropTypes.number,
    symbol: PropTypes.string,
    netIncome: PropTypes.number,
  }).isRequired,
};

export default Card;
