// REDUX-ACTIONS & IMMER
import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';

// AXIOS
import instance from '../../common/axios';

// ACTION
const LOG_IN = 'LOG_IN';
const LOG_OUT = 'LOG_OUT';
const GET_USER = 'GET_USER';

// ACTION CREATORS
const logIn = createAction(LOG_IN, (user) => ({ user }));
const logOut = createAction(LOG_OUT, (user) => ({ user }));
const getUser = createAction(GET_USER, (user) => ({ user }));

// INITIAL STATE
const initialState = {
  user: null,
  is_login: localStorage.getItem('token') ? true : false,
};

// MIDDLEWARE
const loginAction = (user) => {
  return function (dispatch, getState, { history }) {
    instance
      .post('/api/login', { ...user })
      .then((res) => {
        console.log(res);
        dispatch(logIn(res));
        localStorage.setItem('token', res.token);
        history.push('/');
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

// REDUCER
export default handleActions(
  {
    [LOG_IN]: (state, action) =>
      produce(state, (draft) => {
        draft.user = action.payload.user;
        draft.is_login = true;
      }),
    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        localStorage.removeItem('token');
        draft.user = null;
        draft.is_login = false;
      }),
    [GET_USER]: (state, action) => produce(state, (draft) => {}),
  },
  initialState
);

const actionCreators = {
  logIn,
  getUser,
  logOut,
  loginAction,
};

export { actionCreators };
