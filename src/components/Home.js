import { useSelector } from 'react-redux';
import HomeList from './HomeList';
import Navbar from './Navbar';
import Header from './Header';

const Home = () => {
  const actives = useSelector((state) => state.homeReducer.home);

  return (
    <div>
      <Navbar home />
      <Header actives={actives} />
      <HomeList actives={actives} />
    </div>
  );
};

export default Home;
