// LIBRARY
import React, { useState } from 'react';

// ELEMENT
import { Button } from './index';

// REDUX
import { likeActions } from '../redux/modules/like';

const Favorite = ({ postId, favorite }) => {
  const [active, setActive] = useState(favorite === 'FALSE' ? false : true);

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
      clickEvent={(event) => {
        setActive((active) => !active);

        active ? removeLike() : likePost();

        event.stopPropagation();
      }}
    >
      {active ? '저장됨' : '저장'}
    </Button>
  );
};

Favorite.defaultProps = {};

export default Favorite;
