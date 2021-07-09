// ACTION
const LIKE = 'LIKE';

// ACTION CREATER
export const readLike = (like) => ({ type: LIKE, like });

// INITIAL STATE
const initialState = {
  like: [],
};

// MIDDLEWARE

// REDUCER
function like(state = initialState, action) {
  switch (action.type) {
    case LIKE:
      return state;

    default:
      return state;
  }
}

export default like;
