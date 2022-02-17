import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import DetailHero from '../components/DetailHero';

describe('App component should render as expected', () => {
  test('render Details', () => {
    const details = render(
      <Provider store={store}>
        <BrowserRouter>
          <DetailHero
            name="Ford Motor Company"
            ticker="F"
            price="18.08"
            changes={0.620001}
          />
        </BrowserRouter>
      </Provider>,
    );
    expect(details).toMatchSnapshot();
  });
});
