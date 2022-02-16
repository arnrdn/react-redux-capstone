import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDetailsApi } from '../redux/details/details';
import Cards from './Cards';
import Navbar from './Navbar';

const Details = () => {
  const param = useParams();
  const { symbol } = param;

  const details = useSelector((state) => state.detailsReducer.details);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDetailsApi(param));
  }, []);

  return (
    <div className="details">
      <Navbar />
      <p>
        Here we should see the right page lol
        {symbol}
      </p>
      <Cards symbol={symbol} details={details} />
    </div>
  );
};

export default Details;
