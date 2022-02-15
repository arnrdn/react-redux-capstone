import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
// import { fetchDetailsApi } from '../redux/details/details';
import { fetchStockApi } from '../redux/home/home';
import HomeCard from './HomeCard';

const HomeList = () => {
  const actives = useSelector((state) => state.homeReducer.home);

  const dispatch = useDispatch();

  useEffect(() => {
    if (actives.length === 0) {
      dispatch(fetchStockApi());
    }
  }, []);

  const handleClick = (e) => {
    console.log(e.parentElement.payload);
  };

  const list = actives.map((active) => (
    <Link payload={active.ticker} key={active.id} to={`/details/${active.ticker}`} onClick={(e) => handleClick(e)}>
      <HomeCard active={active} />
    </Link>
  ));

  return (
    <div>
      <ul className="stock-list">
        {list}
      </ul>
    </div>
  );
};

export default HomeList;
