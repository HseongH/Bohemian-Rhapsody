// LIBRARY
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// REDUX
import { postActions } from '../redux/modules/post';

import InfinityScroll from '../common/infinityScroll';

const Home = (props) => {
  const dispatch = useDispatch();
  const postList = useSelector((state) => state.post.list);

  useEffect(() => {
    dispatch(postActions.getPostListDB());

    return () => {
      dispatch(postActions.getPostList([], 0));
    };
  }, []);

  return <InfinityScroll postList={postList} page="Home" />;
};

Home.defaultProps = {};

export default Home;
