import { useSelector } from 'react-redux';
import HomeList from './HomeList';
import Navbar from './Navbar';
import Hero from './Hero';

const Home = () => {
  const actives = useSelector((state) => state.homeReducer.home);

  return (
    <div>
      <Navbar home />
      <Hero />
      <HomeList actives={actives} />
    </div>
  );
};

export default Home;
