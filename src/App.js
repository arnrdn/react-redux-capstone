import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Card from './components/Card';
import Navbar from './components/Navbar';
import Cards from './components/Cards';

const App = () => {
  const code = [
    {
      code: 1,
    },
    {
      code: 2,
    },
    {
      code: 3,
    },
  ];

  const codeList = code.map((n) => n.code);

  return (
    <div className="App">
      <Navbar />
      <Home />
      <Card />
      <Cards />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path={`/details/${codeList}`} element={<Card />} />
      </Routes>
    </div>
  );
};

export default App;
