import '@testing-library/jest-dom/extend-expect';
import fetchingDetails from './__mocks__/fetchDetails';
import fetchingStocks from './__mocks__/fetchStocks';

describe('stock fetching is working as expected', () => {
  it('test fetching company name', async () => {
    await fetchingStocks().then((data) => expect(data.data[0].companyName).toBe('Ford Motor Company'));
  });
  it('test fetching ticker', async () => {
    await fetchingStocks().then((data) => expect(data.data[0].ticker).toBe('F'));
  });
  it('test fetching id', async () => {
    await fetchingStocks().then((data) => expect(data.data[0].id).toEqual('0'));
  });
  it('test fetching price', async () => {
    await fetchingStocks().then((data) => expect(data.data[0].price).toBe('18.08'));
  });
});

describe('details fetching is working as expected', () => {
  it('test fetching accepted date', async () => {
    await fetchingDetails().then((data) => expect(data.data[0].acceptedDate).toBe('2021-12-31'));
  });
  it('test fetching calendar year', async () => {
    await fetchingDetails().then((data) => expect(data.data[0].calendarYear).toBe('2021'));
  });
  it('test fetching filling date', async () => {
    await fetchingDetails().then((data) => expect(data.data[0].fillingDate).toBe('2021-12-31'));
  });
  it('test fetching id', async () => {
    await fetchingDetails().then((data) => expect(data.data[0].id).toBe('0'));
  });
  it('test fetching netIncome', async () => {
    await fetchingDetails().then((data) => expect(data.data[0].netIncome).toBe(20081000000));
  });
  it('test fetching symbol', async () => {
    await fetchingDetails().then((data) => expect(data.data[0].symbol).toBe('T'));
  });
});
