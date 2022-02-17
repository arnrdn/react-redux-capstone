import { createStore, combineReducers, applyMiddleware } from 'redux';
// import logger from 'redux-logger';
import thunk from 'redux-thunk';
import homeReducer from './home/home';
import detailsReducer from './details/details';

const reducer = combineReducers({
  homeReducer,
  detailsReducer,
  // additional reducers could be added here
});

const store = createStore(
  reducer,
  applyMiddleware(thunk),
);

export default store;
