import type { AppProps } from 'next/app';
import Router from 'next/router';

import { Provider } from 'react-redux';
import { store } from '../config/redux/store';
import { AuthContextProvider } from '../config/context/AuthContext';

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

import Layout from '../components/Layout/Layout';
import CheckConnection from '../components/CheckConnection';

import GlobalStyle from '../styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';

import NProgress from 'nprogress';
import '../styles/nprogress.css';

NProgress.configure({ showSpinner: false });
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const theme = {
  color: {
    blackdoff: '#16181c',
  },
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <AuthContextProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Layout>
            <CheckConnection />
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </AuthContextProvider>
    </Provider>
  );
}
