import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDetailsApi } from '../redux/details/details';
import Cards from './Cards';
import Navbar from './Navbar';
import DetailHero from './DetailHero';

const Details = () => {
  const param = useParams();
  const { symbol } = param;

  const details = useSelector((state) => state.detailsReducer.details);
  const actives = useSelector((state) => state.homeReducer.home);

  const filteredActives = actives.find((active) => active.ticker === param.symbol);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDetailsApi(param));
  }, []);

  return (
    <div className="details">
      <Navbar />
      <DetailHero
        name={filteredActives.companyName}
        ticker={filteredActives.ticker}
        price={filteredActives.price}
        changes={filteredActives.changes}
      />
      <Cards showDetails symbol={symbol} details={details} />
    </div>
  );
};

export default Details;
