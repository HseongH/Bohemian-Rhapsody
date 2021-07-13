// AXIOS
import instance from '../../common/axios';

// REDUX-ACTIONS & IMMER
import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';

// FUNCTION
import { getToken, setToken, removeToken } from '../../common/token';

// ACTION
const LOG_IN = 'LOG_IN';
const LOG_OUT = 'LOG_OUT';
const CHECK_DUP = 'CHECK_DUP';

// ACTION CREATORS
const logIn = createAction(LOG_IN, (user) => ({ user }));
const logOut = createAction(LOG_OUT, (user) => ({ user }));
const checkDup = createAction(CHECK_DUP, (nickname) => ({ nickname }));

// INITIAL STATE
const initialState = {
  user: null,
  is_login: getToken() ? true : false,
  is_check: false,
};

// MIDDLEWARE
const loginAction = (user) => {
  return function (dispatch, getState, { history }) {
    console.log(user);
    instance
      .post('/api/login', user)
      .then((res) => {
        dispatch(logIn(res));
        setToken(res);
        history.push('/');
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

const nickCheck = (id) => {
  return function (dispatch) {
    instance
      .post('/api/sign/nickname', { nickname: id })
      .then((res) => {
        console.log(res);
        dispatch(checkDup(true));
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

const signupDB = (id, pwd, pwdCheck) => {
  return function (dispatch, getState, { history }) {
    instance
      .post('/api/sign', { nickname: id, password: pwd, confirm: pwdCheck })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(errorCode, errorMessage);
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
        removeToken();
        draft.user = null;
        draft.is_login = false;
      }),

    [CHECK_DUP]: (state, action) =>
      produce(state, (draft) => {
        draft.is_check = true;
      }),
  },
  initialState
);

const userActions = {
  logIn,
  logOut,
  loginAction,
  signupDB,
  nickCheck,
};

export { userActions };
