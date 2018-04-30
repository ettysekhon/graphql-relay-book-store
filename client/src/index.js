import React, { Fragment } from 'react';
import { render } from 'react-dom';
import history from './browser-history';
import { ConnectedRouter } from 'react-router-redux';
import { AppContainer } from 'react-hot-loader';
import { Provider as ReduxProvider } from 'react-redux';
import { IntlProvider } from 'react-intl';
import CssBaseline from 'material-ui/CssBaseline';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import theme from './theme';
import createStore from './store';
import Application from './components/pages';

const getApp = (store, locale, history, ApplicationComponent = Application) => {
  const Component = (
    <Fragment>
      <CssBaseline />
      <ReduxProvider store={store}>
        <MuiThemeProvider theme={theme}>
          <IntlProvider locale={locale}>
            <ConnectedRouter history={history}>
              <ApplicationComponent />
            </ConnectedRouter>
          </IntlProvider>
        </MuiThemeProvider>
      </ReduxProvider>
    </Fragment>
  );

  return process.env.HOT_RELOAD === 'true' ? (
    <AppContainer>{Component}</AppContainer>
  ) : (
    Component
  );
};

const webpackHotReload = (store, locale, history) => {
  if (module.hot) {
    module.hot.accept('./components/pages/index.js', () => {
      // eslint-disable-next-line global-require
      const AppComponent = require('./components/pages/index.js').default;
      render(
        getApp(store, locale, history, AppComponent),
        global.document.getElementById('root'),
      );
    });
  }
};

const startApp = () => {
  const store = createStore(history);
  const { i18n: { locale } } = store.getState();
  console.log('store created');
  render(
    getApp(store, locale, history),
    global.document.getElementById('root'),
  );

  if (typeof process === 'undefined') {
    console.info('The process object is undefined');
  }

  if (process.env.HOT_RELOAD === 'true') {
    webpackHotReload(store, locale, history);
  }
};

startApp();
