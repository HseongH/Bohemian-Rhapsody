// LIBRARY
import React, { useEffect } from 'react';
import StackGrid from 'react-stack-grid';
import { useDispatch, useSelector } from 'react-redux';

// REDUX
import { postActions } from '../redux/modules/post';

// COMPONENTS
import Post from '../components/Post';

const Home = (props) => {
  const dispatch = useDispatch();
  const postList = useSelector((state) => state.post.list);

  useEffect(() => {
    dispatch(postActions.getPostListDB());
  }, []);

  return (
    <StackGrid columnWidth={272} style={{ paddingBottom: '80px' }}>
      {postList.map((post) => {
        return <Post post={post} key={post.postId + Date.now()} />;
      })}
    </StackGrid>
  );
};

Home.defaultProps = {};

export default Home;
