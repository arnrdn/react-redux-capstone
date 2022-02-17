import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Details from './components/Details';

const App = () => (
  <div className="App">
    <div className="main-container">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/details/:symbol" element={<Details />} />
      </Routes>
    </div>
  </div>
);

export default App;
