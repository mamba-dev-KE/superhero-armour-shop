import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';
import store from '../app/store';
import '../styles/index.scss';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
);

export default MyApp;
