// AXIOS
import instance from '../../common/axios';

// ACTION
const GET_COMMENT = 'GET_COMMENT';
const MORE_COMMENT = 'MORE_COMMENT';
const ADD_COMMENT = 'ADD_COMMENT';
const UPDATE_COMMENT = 'UPDATE_COMMENT';
const DEL_COMMENT = 'DEL_COMMENT';

// ACTION CREATER
const getCommentList = (commentList, start) => ({ type: GET_COMMENT, commentList, start });
const getMoreCommnet = (commentList, start) => ({ type: MORE_COMMENT, commentList, start });
const addComment = (comment) => ({ type: ADD_COMMENT, comment });
const updateComment = (commentId, comment) => ({ type: UPDATE_COMMENT, commentId, comment });
const delComment = (commentId) => ({ type: DEL_COMMENT, commentId, comment });

// INITIAL STATE
const initialState = {
  list: [],
  start: 0,
};

// MIDDLEWARE
const getCommentListDB = (postId, limit = 3) => {
  return function (dispatch) {
    instance
      .get(`/api/comment?postId=${postId}&start=0&limit=${limit + 1}`)
      .then((res) => {
        if (res.data.result.length < limit + 1) {
          dispatch(getCommentList(res.data.result, null));
          return;
        }

        if (res.data.result.length >= limit + 1) res.data.result.pop();

        dispatch(getCommentList(res.data.result, limit));
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

const getMoreCommentDB = (postId, limit = 3) => {
  return function (dispatch, getState) {
    const start = getState().comment.start;

    if (start === null) return;

    instance
      .get(`/api/comment?postId=${postId}&start=${start}&limit=${limit + 1}`)
      .then((res) => {
        if (res.data.result.length < limit + 1) {
          dispatch(getMoreCommnet(res.data.result, null));
          return;
        }

        if (res.data.result.length >= limit + 1) res.data.result.pop();

        dispatch(getMoreCommnet(res.data.result, start + limit));
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

const addCommentDB = (postId, comment) => {
  return function (dispatch, getState) {
    const userInfo = getState().user;
    const nickname = userInfo.nickname;
    const userId = userInfo.userId;

    instance
      .post('/api/comment', { postId, comment })
      .then((res) => {
        dispatch(addComment({ commentId: res.data.commentId, comment, userId, nickname }));
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

const updateCommentDB = (commentId, comment) => {
  return function (dispatch) {
    instance
      .put('/api/comment', { commentId, comment })
      .then((res) => {
        dispatch(updateComment(commentId, comment));
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

const delCommentDB = (commentId) => {
  return function (dispatch) {
    instance
      .delete('/api/comment', { data: { commentId } })
      .then((res) => {
        dispatch(delComment(commentId));
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

// REDUCER
function comment(state = initialState, action) {
  switch (action.type) {
    case GET_COMMENT:
      return { list: action.commentList, start: action.start };

    case MORE_COMMENT:
      return { list: [...state.list, ...action.commentList], start: action.start };

    case ADD_COMMENT:
      const newCommentList = [action.comment, ...state.list];
      return { list: newCommentList };

    case UPDATE_COMMENT:
      const updateCommentList = state.list.map((comment) => {
        if (comment.commentId === action.commentId) {
          const newComment = {
            ...comment,
            comment: action.comment,
          };

          return newComment;
        }

        return comment;
      });

      return { list: updateCommentList };

    case DEL_COMMENT:
      const deleteCommentList = state.list.filter((comment) => {
        return comment.commentId !== action.commentId;
      });

      return { list: deleteCommentList };

    default:
      return state;
  }
}

export default comment;

export const commentActions = {
  getCommentList,
  addComment,
  updateComment,
  delComment,
  getCommentListDB,
  getMoreCommentDB,
  addCommentDB,
  updateCommentDB,
  delCommentDB,
};
