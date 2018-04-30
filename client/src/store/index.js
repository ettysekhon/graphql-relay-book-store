import { init } from '@rematch/core';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import auth from './models/auth';
import history from './models/history';
import i18n from './models/i18n';
import relay from './models/relay';

const createStore = routerHistory => {
  return init({
    redux: {
      middlewares: [
        routerMiddleware(routerHistory),
      ],
      reducers: {
        router: routerReducer,
      },
    },
    models: {
      auth,
      history,
      i18n,
      relay,
    },
  });
}

export default createStore;
