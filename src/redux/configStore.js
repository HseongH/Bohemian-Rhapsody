// LIBRARY
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createBrowserHistory } from 'history';
import { connectRouter } from 'connected-react-router';
import thunk from 'redux-thunk';

// REDUCER

// HISTORY
export const history = createBrowserHistory();

const rootReducer = combineReducers({
  router: connectRouter(history),
});

const middlewares = [thunk.withExtraArgument({ history })];

if (process.env.NODE_ENV === 'development') {
  const { logger } = require('redux-logger');
  middlewares.push(logger);
}

const enhancer = applyMiddleware(...middlewares);
const store = createStore(rootReducer, enhancer);

export default store;
