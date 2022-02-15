import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Cards from './components/Cards';
import Details from './components/Details';

const App = () => (
  <div className="App">
    <Navbar />
    <Cards />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/details/:symbol" element={<Details />} />
    </Routes>
  </div>
);

export default App;
