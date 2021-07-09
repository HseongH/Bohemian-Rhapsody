// ACTION
const USER = 'USER';

// ACTION CREATER
export const readUser = (user) => ({ type: USER, user });

// INITIAL STATE
const initialState = {
  user: [],
};

// MIDDLEWARE

// REDUCER
function user(state = initialState, action) {
  switch (action.type) {
    case USER:
      return state;

    default:
      return state;
  }
}

export default user;
