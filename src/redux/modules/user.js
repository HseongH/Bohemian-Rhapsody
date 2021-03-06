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
const logIn = createAction(LOG_IN, (token) => ({ token }));
const logOut = createAction(LOG_OUT);
const checkDup = createAction(CHECK_DUP, (nickname) => ({ nickname }));

// INITIAL STATE
const initialState = {
  token: null,
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
        const userInfo = {
          userId: res.data.userId,
          nickname: user.nickname,
        };

        dispatch(checkDidIWrite(userInfo));
        dispatch(logIn(res.data.token));

        setToken(res.data.token);

        history.push('/');
      })
      .catch((error) => {
        console.error(error);
        window.alert('아이디 또는 패스워드가 올바르지 않습니다.');
      });
  };
};

const logInCheck = (token) => {
  return function (dispatch) {
    if (token) {
      dispatch(logIn(token));
    }
  };
};

const nickCheck = (id) => {
  return function (dispatch) {
    instance
      .post('/api/sign/nickname', { nickname: id })
      .then((res) => {
        dispatch(checkDup(true));
        window.alert('사용 가능한 아이디입니다.');
      })
      .catch((error) => {
        dispatch(checkDup(false));
        window.alert('이미 존재하는 아이디입니다.');
      });
  };
};

const signupDB = (id, pwd, pwdCheck) => {
  return function () {
    instance
      .post('/api/sign', { nickname: id, password: pwd, confirmPassword: pwdCheck })
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
        draft.token = action.payload.token;
        draft.is_login = true;
      }),

    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        removeToken();
        draft.userId = null;
        draft.nickname = null;
        draft.token = null;
        draft.is_login = false;
      }),

    [CHECK_DUP]: (state, action) =>
      produce(state, (draft) => {
        draft.is_check = action.payload.nickname;
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
