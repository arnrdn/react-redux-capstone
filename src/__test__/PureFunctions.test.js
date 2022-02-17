import homeReducer, { fetchData } from '../redux/home/home';
import detailsReducer, { fetchDetails } from '../redux/details/details';

describe('fetching data should work as expected', () => {
  test('return the correct data', () => {
    const test = [
      {
        changes: 0.620001,
        companyName: 'Ford Motor Company',
        id: '0',
        price: '18.08',
        ticker: 'F',
      },
    ];
    const action = fetchData(test);
    const res = {
      type: 'react-redux-capstone/home/FETCH_DATA',
      payload: test,
    };
    expect(action).toEqual(res);
  });
});

describe('fetching data should work as expected', () => {
  test('return the correct details', () => {
    const test = [
      {
        acceptedDate: '2021-12-31',
        calendarYear: '2021',
        fillingDate: '2021-12-31',
        id: '0',
        netIncome: 20081000000,
        symbol: 'T',
      },
    ];
    const action = fetchDetails(test);
    const res = {
      type: 'react-redux-capstone/details/FETCH_DETAILS',
      payload: test,
    };
    expect(action).toEqual(res);
  });
});

describe('data reducer should work as expectred', () => {
  test('should return actives', () => {
    const action = {
      type: 'react-redux-capstone/home/FETCH_DATA',
      payload: [
        {
          changes: 0.620001,
          companyName: 'Ford Motor Company',
          id: '0',
          price: '18.08',
          ticker: 'F',
        },
      ],
    };
    const reducer = homeReducer([], action);
    expect(reducer).toEqual({ home: action.payload });
  });
});

describe('details reducer should work as expectred', () => {
  test('should return details', () => {
    const action = {
      type: 'react-redux-capstone/details/FETCH_DETAILS',
      payload: [
        {
          acceptedDate: '2021-12-31',
          calendarYear: '2021',
          fillingDate: '2021-12-31',
          id: '0',
          netIncome: 20081000000,
          symbol: 'T',
        },
      ],
    };
    const reducer = detailsReducer([], action);
    expect(reducer).toEqual({ details: action.payload });
  });
});
