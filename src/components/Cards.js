import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from './Card';
import { fetchDetailsApi } from '../redux/details/details';

const Cards = () => {
  const details = useSelector((state) => state.detailsReducer.details);

  const dispatch = useDispatch();

  useEffect(() => {
    if (details.length === 0) {
      dispatch(fetchDetailsApi());
    }
  }, []);

  const detailsList = details.map((detail) => (<Card key={detail.id} detail={detail} />));

  return (
    <div>
      <ul>
        {detailsList}
      </ul>
    </div>
  );
};

export default Cards;
