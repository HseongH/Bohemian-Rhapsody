// AXIOS
import instance from '../../common/axios';

// ACTION
const GET_LIKE_LIST = 'GET_LIKE_LIST';
const REMOVE_LIKE_POST = 'REMOVE_LIKE_POST';

// ACTION CREATOR
const getLikeList = (likeList, start) => ({ type: GET_LIKE_LIST, likeList, start });
const removeLikePost = (postId) => ({ type: REMOVE_LIKE_POST, postId });

// INITIAL STATE
const initialState = {
  list: [],
  start: 0,
};

// MIDDLEWARE
const getLikeListDB = (limit = 6) => {
  return function (dispatch, getState) {
    const start = getState().like.start;

    if (start === null) return;

    instance
      .get(`/api/like?start=${start}&limit=${limit + 1}`)
      .then((res) => {
        if (res.data.result.length < limit + 1) {
          dispatch(getLikeList(res.data.result, null));
          return;
        }

        if (res.data.result.length >= limit + 1) res.data.result.pop();

        dispatch(getLikeList(res.data.result, start + limit));
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
      return { list: [...state.list, ...action.likeList], start: action.start };

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
