import Axios from 'axios';

const FETCH_DETAILS = 'FETCH_DETAILS';

export const initialDetailsState = {
  details: [],
};

const key = 'f6218dad261945cd7da0a9f3a10a7b8c';

export const fetchDetails = (payload) => ({
  type: FETCH_DETAILS,
  payload,
});

export const fetchDetailsApi = (props) => async (dispatch) => {
  const information = await Axios.get(`https://financialmodelingprep.com/api/v3/income-statement/${props.symbol}?limit=120&apikey=${key}`);
  const sortedInfo = Object.entries(information.data).map(([id, info]) => {
    const {
      calendarYear, symbol, fillingDate, acceptedDate, netIncome,
    } = info;
    return {
      id, calendarYear, symbol, fillingDate, acceptedDate, netIncome,
    };
  });
  dispatch(fetchDetails(sortedInfo));
};

const detailsReducer = (state = initialDetailsState, action) => {
  switch (action.type) {
    case FETCH_DETAILS:
      return { details: action.payload };
    default:
      return state;
  }
};

export default detailsReducer;
