import { useParams } from 'react-router-dom';
import Cards from './Cards';

const Details = () => {
  const { symbol } = useParams();

  return (
    <div className="details">
      <p>
        Here we should see the right page lol
        {symbol}
      </p>
      <Cards symbol={symbol} />
    </div>
  );
};

export default Details;
