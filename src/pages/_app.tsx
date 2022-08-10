import type { AppProps } from 'next/app'
import { useRef } from 'react';
import 'styles/index.scss'
import Head from 'components/layout/Head';
import MetaMaskProvider from 'components/web3/MetaMaskProvider';
import { Provider } from 'react-redux';
import store from 'redux/store';
import { PersistGate } from 'redux-persist/lib/integration/react';
import LoadingPage from 'components/screens/LoadingPage/LoadingPage';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <Head />
      <MetaMaskProvider>
        <Component {...pageProps} />
      </MetaMaskProvider>
    </Provider>
  )
}
export default MyApp
