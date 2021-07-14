// AXIOS
import instance from '../../common/axios';

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
  instance
    .delete('/api/like', { data: { postId } })
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.error(error);
    });
};

export const likeActions = {
  postLikeDB,
  postRemoveListDB,
};
