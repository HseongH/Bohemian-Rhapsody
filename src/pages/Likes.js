// LIBRARY
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import StackGrid from 'react-stack-grid';

// COMPONENTS
import Post from '../components/Post';

// ELEMENTS
import { Button, Text, Grid, Title } from '../elements/index';

// HISTORY
import { history } from '../redux/configStore';
import { postActions } from '../redux/modules/post';

const Likes = (props) => {
  const dispatch = useDispatch();

  const state = useSelector((state) => state);
  const nickname = state.user.nickname;
  const likeList = state.post.list;

  useEffect(() => {
    dispatch(postActions.getLikeListDB());
  }, []);

  return (
    <Grid>
      <Title margin="80px 0" textAlign="center" fontSize="28px">
        {nickname}
      </Title>

      <hr color="#eee" width="100%" />

      {!likeList.length ? (
        <>
          <Text textAlign="center" margin="30px 0" fontSize="20px">
            아직 저장한 게시물이 없습니다.
          </Text>

          <Button
            width="200px"
            height="auto"
            padding="12px 18px"
            radius="30px"
            margin="0 auto"
            display="flex"
            clickEvent={() => {
              history.push('/');
            }}
          >
            게시물 추가하러 가기
          </Button>
        </>
      ) : (
        <StackGrid columnWidth={272} style={{ paddingBottom: '80px' }}>
          {likeList.map((post) => {
            return <Post post={post} key={post.postId + Date.now()} />;
          })}
        </StackGrid>
      )}
    </Grid>
  );
};

Likes.defaultProps = {};

export default Likes;
