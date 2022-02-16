import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Details from './components/Details';

const App = () => (
  <div className="App">
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/details/:symbol" element={<Details />} />
    </Routes>
  </div>
);

export default App;
