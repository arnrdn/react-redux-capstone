import { useSelector } from 'react-redux';
import HomeList from './HomeList';
import Navbar from './Navbar';

const Home = () => {
  const actives = useSelector((state) => state.homeReducer.home);

  return (
    <div>
      <Navbar home />
      <HomeList actives={actives} />
    </div>
  );
};

export default Home;
