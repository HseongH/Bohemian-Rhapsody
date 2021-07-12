// LIBRARY
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { createBrowserHistory } from 'history';
import { connectRouter } from 'connected-react-router';
import thunk from 'redux-thunk';

// REDUCER
import User from './modules/user';
import post from './modules/post';
import like from './modules/like';
import image from './modules/image';

import postDetail from './modules/detailPost';

// HISTORY
export const history = createBrowserHistory();

const rootReducer = combineReducers({
  user: User,
  post,
  like,
  image,
  router: connectRouter(history),
  postDetail,
});

const middlewares = [thunk.withExtraArgument({ history:history })];

if (process.env.NODE_ENV === 'development') {
  const { logger } = require('redux-logger');
  middlewares.push(logger);
}

const enhancer = applyMiddleware(...middlewares);
let store = compose(createStore(rootReducer, enhancer));

export default store;
