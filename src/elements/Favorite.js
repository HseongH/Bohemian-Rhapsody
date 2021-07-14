// LIBRARY
import React, { useState } from 'react';

// ELEMENT
import { Button } from './index';

// REDUX
import { likeActions } from '../redux/modules/like';

const Favorite = ({ postId }) => {
  const [active, setActive] = useState(false);

  const likePost = () => {
    likeActions.postLikeDB(postId);
  };

  const removeLike = () => {
    likeActions.postRemoveListDB(postId);
  };

  return (
    <Button
      width="auto"
      height="auto"
      padding="10px 12px"
      radius="20px"
      bg={active ? '#111111' : '#5a189a'}
      clickEvent={() => {
        setActive((active) => !active);

        active ? removeLike() : likePost();
      }}
    >
      {active ? '저장됨' : '저장'}
    </Button>
  );
};

Favorite.defaultProps = {};

export default Favorite;
