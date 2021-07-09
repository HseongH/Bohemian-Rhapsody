// ACTION
const POST = 'POST';

// ACTION CREATER
export const readPost = (post) => ({ type: POST, post });

// INITIAL STATE
const initialState = {
  post: [],
};

// MIDDLEWARE

// REDUCER
function post(state = initialState, action) {
  switch (action.type) {
    case POST:
      return state;

    default:
      return state;
  }
}

export default post;
