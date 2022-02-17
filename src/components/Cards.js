import PropTypes from 'prop-types';
import { useState } from 'react';
import { useTransition, animated } from 'react-spring';
import Card from './Card';

const Cards = (props) => {
  const { symbol, details, showDetails } = props;

  const detList = details.map((detail) => (
    <Card
      id={symbol}
      key={detail.id}
      detail={detail}
    />
  ));

  const [show, set] = useState(false);
  const transitions = useTransition(show, {
    from: { opacity: 0 },
    config: {
      duration: 300,
    },
    enter: { opacity: 1 },
    onRest: () => set(true),
  });

  return transitions((styles, item) => (item
    && (
    <animated.div style={styles}>
      <div>
        {showDetails && (
        <ul className="cards-list">
          {detList}
        </ul>
        )}
        {details.length === 0 && (<div className="no-info">It looks like we don&apos;t have any additional data about this company, sorry!</div>)}
      </div>
    </animated.div>
    )
  ));
};

Cards.propTypes = {
  symbol: PropTypes.string,
  details: PropTypes.array,
  showDetails: PropTypes.bool,
}.isRequired;

export default Cards;
