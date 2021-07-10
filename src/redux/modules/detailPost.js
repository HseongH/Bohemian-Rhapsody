// ACTION
const DETAIL_POST = 'DETAIL_POST';

// ACTION CREATER
export const readPost = (post) => ({ type: DETAIL_POST, post });

// INITIAL STATE
const initialState = {};

// MIDDLEWARE
const getOnePost = () => {};

// REDUCER
function postDetail(state = initialState, action) {
  switch (action.type) {
    case DETAIL_POST:
      return state;

    default:
      return state;
  }
}

export default postDetail;
