// AXIOS
import instance from '../../common/axios';

// ACTION
const GET_COMMENT = 'GET_COMMENT';
const ADD_COMMENT = 'ADD_COMMENT';
const UPDATE_COMMENT = 'UPDATE_COMMENT';
const DEL_COMMENT = 'DEL_COMMENT';

// ACTION CREATER
const getCommentList = (commentList) => ({ type: GET_COMMENT, commentList });
const addComment = (comment) => ({ type: ADD_COMMENT, comment });
const updateComment = (commentId, comment) => ({ type: UPDATE_COMMENT, commentId, comment });
const delComment = (commentId) => ({ type: DEL_COMMENT, commentId, comment });

// INITIAL STATE
const initialState = {
  list: [],
};

// MIDDLEWARE
const getCommentListDB = (postId) => {
  return function (dispatch) {
    instance
      .post('/api/comment', { postId })
      .then((res) => {
        dispatch(getCommentList(res.data.result));
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

const addCommentDB = (postId, comment) => {
  return function (dispatch) {
    instance
      .post('/api/comment', { postId, comment })
      .then((res) => {
        dispatch(addComment(comment));
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

const updateCommentDB = (comemntId, comment) => {
  return function (dispatch) {
    instance
      .put('/api/comment', { comemntId, comment })
      .then((res) => {
        dispatch(updateComment(comemntId, comment));
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

const delCommentDB = (commentId) => {
  return function (dispatch) {
    instance
      .delete('/api/comment', { commentId })
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
      return { list: action.commentList };

    case ADD_COMMENT:
      const newCommentList = [action.comment, ...state.list];
      return { list: newCommentList };

    case UPDATE_COMMENT:
      const updateCommentList = state.list.map((comment) => {
        if (comment.commentId === action.commentId) {
          return action.comment;
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
  addCommentDB,
  updateCommentDB,
  delCommentDB,
};
