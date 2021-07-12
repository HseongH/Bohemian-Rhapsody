// LIBRARY
import React from 'react';
import StackGrid from 'react-stack-grid';
import { useSelector } from 'react-redux';

// COMPONENTS
import Post from '../components/Post';

const Home = (props) => {
  const postList = useSelector((state) => state.postDetail.list);

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
