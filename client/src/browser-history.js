import createHistory from 'history/createBrowserHistory';

const history = createHistory();

export default history;

export const push = url => history.push(url);

export const replace = url => history.replace(url);
