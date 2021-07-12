// LIBRARY
import React, { useEffect } from 'react';
import StackGrid from 'react-stack-grid';
import { useDispatch, useSelector } from 'react-redux';

// REDUX
import { postActions } from '../redux/modules/detailPost';

// COMPONENTS
import Post from '../components/Post';

const Home = (props) => {
  const dispatch = useDispatch();
  const postList = useSelector((state) => state.postDetail.list);

  useEffect(() => {
    dispatch(postActions.getPostListDB());
  }, []);

  return (
    <StackGrid columnWidth={272} style={{ paddingBottom: '80px' }}>
      {postList.map((post, idx) => {
        return <Post post={post} key={idx} />;
      })}
    </StackGrid>
  );
};

Home.defaultProps = {};

export default Home;
