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
const deletePost = (postId) => ({ type: POST_DELETE, postId });

// INITIAL STATE
const initialState = {
  list: [],
  post: null,
};

// MIDDLEWARE
const createPostDB = (post) => {
  return function (dispatch) {
    instance
      .post('/post', { ...post })
      .then((res) => {
        dispatch(createPost(post));
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

const getOnePostDB = (postId) => {
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
        dispatch(updatePost(postId, post));
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

const deletePostDB = (postId) => {
  return function (dispatch) {
    instance
      .delete('/post', { postId })
      .then((res) => {
        dispatch(deletePost(postId));
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

// REDUCER
function postDetail(state = initialState, action) {
  switch (action.type) {
    case POST_CREATE:
      const newPostList = [action.post, ...state.list];
      return { list: newPostList };

    case POST_DETAIL:
      if (action.post)
        return {
          post: action.post,
        };
      return null;

    case POST_UPDATE:
      const updateList = state.list.map((post) => {
        if (post.postId === action.postId) {
          return action.post;
        }
        return post;
      });

      return { list: updateList };

    case POST_DELETE:
      const deleteList = state.list.filter((post) => post.postId !== action.postId);

      return { list: deleteList };

    default:
      return state;
  }
}

export default postDetail;

export const postActions = {
  createPost,
  getOnePost,
  updatePost,
  deletePost,
  createPostDB,
  getOnePostDB,
  updatePostDB,
  deletePostDB,
};
