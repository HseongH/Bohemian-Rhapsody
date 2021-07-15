// LIBRARY
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

// ELEMENT
import { Button } from './index';

// REDUX
import { likeActions } from '../redux/modules/like';

const Favorite = ({ postId, favorite }) => {
  const dispatch = useDispatch();
  const [active, setActive] = useState(favorite === 'FALSE' ? false : true);

  const likePost = () => {
    likeActions.postLikeDB(postId);
  };

  const removeLike = () => {
    dispatch(likeActions.postRemoveLikeDB(postId));
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
