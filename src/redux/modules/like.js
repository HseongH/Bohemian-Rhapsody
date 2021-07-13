// AXIOS
import instance from '../../common/axios';

// REDUX
import { postActions } from './post';

// MIDDLEWARE
const postLikeDB = (postId) => {
  return function (dispatch) {
    instance
      .post('/api/like', { postId })
      .then((res) => {
        dispatch(postActions.getOnePostDB(postId));
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

export default postLikeDB;
