// AXIOS
import instance from '../../common/axios';

// REDUX-ACTIONS & IMMER
import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';

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
  is_login: localStorage.getItem('token') ? true : false,
  is_check: false,
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
<<<<<<< HEAD
      })
      .catch((error) => {
=======
        window.alert("회원 가입이 완료되었습니다.")
      }).catch((error) => {
>>>>>>> c9aa70e0cb4e722c4003152b6d1846514b511a97
        var errorCode = error.code;
        var errorMessage = error.message;
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
        localStorage.removeItem('token');
        draft.user = null;
        draft.is_login = false;
      }),

<<<<<<< HEAD
    [GET_USER]: (state, action) => produce(state, (draft) => {}),

    [CHECK_DUP]: (state, action) =>
      produce(state, (draft) => {
        draft.is_check = true;
      }),
=======
    [CHECK_DUP]: (state, action) => produce(state, (draft) => {
      draft.is_check = true;
    })
>>>>>>> c9aa70e0cb4e722c4003152b6d1846514b511a97
  },
  initialState
);

const actionCreators = {
  logIn,
  logOut,
  loginAction,
  signupDB,
  nickCheck,
};

export { actionCreators };
