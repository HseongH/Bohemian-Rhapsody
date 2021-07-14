// LIBRARY
import React from 'react';
import StackGrid from 'react-stack-grid';
import { useSelector } from 'react-redux';

// ELEMENTS
import { Text } from '../elements/index';

// COMPONENTS
import Post from '../components/Post';

const Search = (props) => {
  const keyword = window.location.search.slice(1).split('=')[1];
  const searchList = useSelector((state) => state.post.list);

  return (
    <>
      {searchList.length ? (
        <StackGrid columnWidth={272} style={{ paddingBottom: '80px' }}>
          {searchList.map((post) => (
            <Post post={post} key={post.postId + Date.now()} />
          ))}
        </StackGrid>
      ) : (
        <Text fontSize="23px" margin="30px 30px 0 80px">
          {decodeURI(keyword)}에 대한 검색 결과가 없습니다.
        </Text>
      )}
    </>
  );
};

Search.defaultProps = {};

export default Search;
