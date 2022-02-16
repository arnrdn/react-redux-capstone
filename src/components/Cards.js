import PropTypes from 'prop-types';
import Card from './Card';

const Cards = (props) => {
  const { symbol, details } = props;

  const detList = details.map((detail) => (
    <Card
      id={symbol}
      key={detail.id}
      detail={detail}
    />
  ));

  return (
    <div>
      <ul>
        {detList}
      </ul>
    </div>
  );
};

Cards.propTypes = {
  symbol: PropTypes.string,
  details: PropTypes.array,
}.isRequired;

export default Cards;
