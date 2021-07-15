// LIBRARY
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { createBrowserHistory } from 'history';
import { connectRouter } from 'connected-react-router';
import thunk from 'redux-thunk';

// REDUCER
import User from './modules/user';
import post from './modules/post';
import image from './modules/image';
import comment from './modules/comment';
import like from './modules/like';

// HISTORY
export const history = createBrowserHistory();

const rootReducer = combineReducers({
  user: User,
  post,
  image,
  comment,
  like,
  router: connectRouter(history),
});

const middlewares = [thunk.withExtraArgument({ history: history })];

if (process.env.NODE_ENV === 'development') {
  const { logger } = require('redux-logger');
  middlewares.push(logger);
}

const enhancer = applyMiddleware(...middlewares);
let store = compose(createStore(rootReducer, enhancer));

export default store;
