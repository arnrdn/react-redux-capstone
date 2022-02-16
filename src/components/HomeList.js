import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { fetchStockApi } from '../redux/home/home';
import HomeCard from './HomeCard';

const HomeList = ({ actives }) => {
  const [searchValue, setSearchValue] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    if (actives.length === 0) {
      dispatch(fetchStockApi());
    }
  }, []);

  const filtered = actives.filter((active) => active.companyName
    .toLowerCase()
    .includes(searchValue.toLowerCase().trim()));

  const finalList = filtered.map((item) => (
    <Link
      id={item.ticker}
      key={item.id}
      to={`/details/${item.ticker}`}
    >
      <HomeCard
        active={item}
      />
    </Link>
  ));

  return (
    <div>
      <div>
        <form>
          <input type="text" placeholder="Search..." onChange={(e) => setSearchValue(e.target.value)} value={searchValue} />
          <button type="button">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <span className="dot">.</span>
          </button>
        </form>
      </div>
      <ul className="stock-list">
        {finalList}
      </ul>
    </div>
  );
};

HomeList.propTypes = {
  actives: PropTypes.array,
}.isRequired;

export default HomeList;
