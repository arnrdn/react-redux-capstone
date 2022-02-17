import details from './fetchDetailsApi';

const fetchingDetails = () => details().then((data) => data);

export default fetchingDetails;
