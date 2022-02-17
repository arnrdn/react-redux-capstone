import PropTypes from 'prop-types';

const Card = (props) => {
  const {
    detail: {
      calendarYear, fillingDate, acceptedDate, netIncome,
    },

  } = props;
  return (
    <li className="card-item">
      <div className="year">
        {calendarYear}
      </div>
      <div className="dates">
        <p className="f-date">
          <b>Filling date:</b>
          {' '}
          {fillingDate}
        </p>
        <p className="a-date">
          <b>Accepted date:</b>
          {' '}
          {acceptedDate.length > 10 ? (acceptedDate.slice(0, -9)) : (acceptedDate)}
        </p>
      </div>
      <div className="net-income">
        <p className="p-title"><b>Net income:</b></p>
        <p>
          {netIncome / (10 ** 9)}
          {' '}
          billion
        </p>
      </div>
    </li>
  );
};

Card.propTypes = {
  detail: PropTypes.shape({
    calendarYear: PropTypes.string,
    fillingDate: PropTypes.string,
    acceptedDate: PropTypes.string,
    netIncome: PropTypes.number,
  }).isRequired,
};

export default Card;
