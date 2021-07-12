// AXIOS
import instance from '../../common/axios';

// REDUX
import { imgActions } from './image';

// ACTION
const GET_POST = 'GET_POST';
const POST_CREATE = 'POST_CREATE';
const POST_DETAIL = 'POST_DETAIL';
const POST_UPDATE = 'POST_UPDATE';
const POST_DELETE = 'POST_DELETE';

// ACTION CREATER
const getPostList = (postList) => ({ type: GET_POST, postList });
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
const getPostListDB = () => {
  return function (dispatch) {
    instance
      .get('/api/post/posts')
      .then((res) => {
        dispatch(getPostList(res));
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

const createPostDB = (image, post) => {
  return function (dispatch, getState) {
    dispatch(
      imgActions.uploadImageDB(image, () => {
        const imgUrl = getState().image.imageUrl;
        const postInfo = {
          ...post,
          img: imgUrl,
        };

        instance
          .post('/post', { ...postInfo })
          .then((res) => {
            dispatch(createPost(postInfo));
          })
          .catch((error) => {
            console.error(error);
          });
      })
    );
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
      .delete('/api/post', { postId })
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
    case GET_POST:
      return { list: action.postList };

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
  getPostList,
  createPost,
  getOnePost,
  updatePost,
  deletePost,
  getPostListDB,
  createPostDB,
  getOnePostDB,
  updatePostDB,
  deletePostDB,
};
