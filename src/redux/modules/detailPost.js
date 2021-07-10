// AXIOS
import instance from '../../common/axios';

// ACTION
const POST_CREATE = 'POST_CREATE';
const POST_DETAIL = 'POST_DETAIL';
const POST_UPDATE = 'POST_UPDATE';
const POST_DELETE = 'POST_DELETE';

// ACTION CREATER
const createPost = (post) => ({ type: POST_CREATE, post });
const getOnePost = (post) => ({ type: POST_DETAIL, post });
const updatePost = (postId, post) => ({ type: POST_UPDATE, postId, post });

// INITIAL STATE
const initialState = {
  post: null,
};

// MIDDLEWARE
const getOntPostDB = (postId) => {
  return function (dispatch) {
    instance
      .get(`/detail/:${postId}`)
      .then((res) => {
        console.log(res);
        dispatch(getOnePost(res));
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

const updatePostDB = (postId, post) => {
  return function (dispatch) {
    instance
      .put(`/api/post/:${postId}`, { ...post })
      .then((res) => {
        console.log(res);
        dispatch(getOnePost(res));
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

// REDUCER
function postDetail(state = initialState, action) {
  switch (action.type) {
    case POST_DETAIL:
      if (action.post)
        return {
          post: action.post,
        };
      return null;

    default:
      return state;
  }
}

export default postDetail;

export const postActions = {
  createPost,
  getOnePost,
  updatePost,
  getOnePost,
};
