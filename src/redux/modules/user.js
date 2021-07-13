// AXIOS
import instance from '../../common/axios';

// REDUX-ACTIONS & IMMER
import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';

// FUNCTION
import { setToken, removeToken } from '../../common/token';

// ACTION
const DID_I_WRITE = 'DID_I_WRITE';
const LOG_IN = 'LOG_IN';
const LOG_OUT = 'LOG_OUT';
const CHECK_DUP = 'CHECK_DUP';

// ACTION CREATORS
const checkDidIWrite = createAction(DID_I_WRITE, (userInfo) => ({ userInfo }));
const logIn = createAction(LOG_IN, (user) => ({ user }));
const logOut = createAction(LOG_OUT, (user) => ({ user }));
const checkDup = createAction(CHECK_DUP, (nickname) => ({ nickname }));

// INITIAL STATE
const initialState = {
  user: null,
  is_login: false,
  is_check: false,
  userId: null,
  nickname: null,
};

// MIDDLEWARE
const checkDidIWriteDB = () => {
  return function (dispatch) {
    instance
      .post('/api/user/me')
      .then((res) => {
        dispatch(checkDidIWrite(res.data));
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

const loginAction = (user) => {
  return function (dispatch, getState, { history }) {
    instance
      .post('/api/login', user)
      .then((res) => {
        dispatch(logIn(res.data.token));
        setToken(res.data.token);
        instance.defaults.headers.common['authorization'] = `Bearer ${res.data.token}`;
        history.push('/');
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

const logInCheck = (token) => {
  return function (dispatch) {
    if (token) {
      dispatch(logIn(token));
      instance.defaults.headers.common['authorization'] = `Bearer ${token}`;
    } else {
      dispatch(logOut());
    }
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
      .post('/api/sign', { nickname: id, password: pwd, confirmPassword: pwdCheck })
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
    [DID_I_WRITE]: (state, action) =>
      produce(state, (draft) => {
        draft.userId = action.payload.userInfo.userId;
        draft.nickname = action.payload.userInfo.nickname;
      }),

    [LOG_IN]: (state, action) =>
      produce(state, (draft) => {
        draft.user = action.payload.user;
        draft.is_login = true;
      }),

    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        removeToken();
        draft.userId = null;
        draft.nickname = null;
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
  logInCheck,
  logOut,
  loginAction,
  checkDidIWriteDB,
  signupDB,
  nickCheck,
};

export { userActions };
