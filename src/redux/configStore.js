// LIBRARY
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { createBrowserHistory } from 'history';
import { connectRouter } from 'connected-react-router';
import thunk from 'redux-thunk';

// REDUCER
import user from './modules/user';
import post from './modules/post';
import like from './modules/like';
import image from './modules/image';

// HISTORY
export const history = createBrowserHistory();

const rootReducer = combineReducers({
  user,
  post,
  like,
  image,
  router: connectRouter(history),
});

const middlewares = [thunk.withExtraArgument({ history })];

if (process.env.NODE_ENV === 'development') {
  const { logger } = require('redux-logger');
  middlewares.push(logger);
}

const enhancer = applyMiddleware(...middlewares);
const store = compose(createStore(rootReducer, enhancer));

export default store;
