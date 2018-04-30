import get from 'lodash.get';
import { dispatch } from '@rematch/core'

export default {
  state: {
    isLoggedIn: false
  },
  reducers: {
    updateIsLoggedIn(state, isLoggedIn) {
      return { ...state, isLoggedIn };
    },
  },
  effects: {
   async login(payload, rootState) {
     const redirectTo = get(rootState, 'router.location.state.from.pathname', '/');
     await new Promise(resolve => setTimeout(resolve, 1000));
     this.updateIsLoggedIn(true);
     dispatch.history.push(redirectTo);
   },
 }
}
