// AXIOS
import instance from '../../common/axios';

// REDUX
import { postActions } from './post';

// MIDDLEWARE
const postLikeDB = (postId) => {
  instance
    .post('/api/like', { postId })
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.error(error);
    });
};

const postRemoveListDB = (postId) => {
  return function (dispatch) {
    instance
      .delete('/api/like', { data: { postId } })
      .then((res) => {
        dispatch(postActions.deletePost(postId));
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

export const likeActions = {
  postLikeDB,
  postRemoveListDB,
};
