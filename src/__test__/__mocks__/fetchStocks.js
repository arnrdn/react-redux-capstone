import stocks from './fetchStocksApi';

const fetchingStocks = () => stocks().then((data) => data);

export default fetchingStocks;
