// AXIOS
import instance from '../../common/axios';

// REDUX
import { postActions } from './post';

// ACTION
const GET_LIKE_LIST = 'GET_LIKE_LIST';
const REMOVE_LIKE_POST = 'REMOVE_LIKE_POST';

// ACTION CREATOR
const getLikeList = (likeList) => ({ type: GET_LIKE_LIST, likeList });
const removeLikePost = (postId) => ({ type: REMOVE_LIKE_POST, postId });

// INITIAL STATE
const initialState = {
  list: [],
};

// MIDDLEWARE
const getLikeListDB = () => {
  return function (dispatch) {
    instance
      .get('/api/like')
      .then((res) => {
        dispatch(getLikeList(res.data.result));
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

const postLikeDB = (postId) => {
  instance.post('/api/like', { postId }).catch((error) => {
    console.error(error);
  });
};

const postRemoveLikeDB = (postId) => {
  return function (dispatch) {
    instance
      .delete('/api/like', { data: { postId } })
      .then((res) => {
        dispatch(removeLikePost(postId));
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

// REDUCER
function like(state = initialState, action) {
  switch (action.type) {
    case GET_LIKE_LIST:
      return { list: action.likeList };

    case REMOVE_LIKE_POST:
      const deleteLikeList = state.list.filter((post) => post.postId !== action.postId);

      return { list: deleteLikeList };

    default:
      return state;
  }
}

export default like;

export const likeActions = {
  getLikeListDB,
  postLikeDB,
  postRemoveLikeDB,
};
