// REDUX-ACTIONS & IMMER
import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';

<<<<<<< HEAD
// COOKIE
import { setCookie, getCookie, deleteCookie } from '../../prac/Cookie';

=======
>>>>>>> ff04b3fa8cad2d18a231d7de618bbc1e7a8e2902
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
  is_login: localStorage.getItem("token") ? true : false
};

// MIDDLEWARE
const loginAction = (user) => {
  return function (dispatch, getState, { history }) {
    console.log(history);
    dispatch(logIn(user));
    history.push('/');
  };
};

// REDUCER
export default handleActions(
  {
    [LOG_IN]: (state, action) =>
      produce(state, (draft) => {
<<<<<<< HEAD
        setCookie('is_login', 'success');
=======
>>>>>>> ff04b3fa8cad2d18a231d7de618bbc1e7a8e2902
        draft.user = action.payload.user;
        draft.is_login = true;
      }),
    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
<<<<<<< HEAD
        deleteCookie('is_login');
=======
        localStorage.clear();
>>>>>>> ff04b3fa8cad2d18a231d7de618bbc1e7a8e2902
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
