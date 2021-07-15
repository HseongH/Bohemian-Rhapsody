// LIBRARY
import React, { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import StackGrid from 'react-stack-grid';

//TOKEN
import { getToken } from '../common/token';

// COMPONENTS
import Post from '../components/Post';
import Permit from '../components/Permit'

// ELEMENTS
import { Button, Text, Grid, Title } from '../elements/index';

// HISTORY
import { history } from '../redux/configStore';
import { postActions } from '../redux/modules/post';

const Likes = (props) => {
  const dispatch = useDispatch();

  const { nickname, likeList } = useSelector(
    (state) => ({
      nickname: state.user.nickname,
      likeList: state.post.list,
    }),
    shallowEqual
  );

  useEffect(() => {
    dispatch(postActions.getLikeListDB());
  }, []);

  useEffect(() => {
    if (!getToken()) {
      history.replace('/login');
    }
  }, []);

  return (
    <Permit>
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
              const postInfo = { ...post, favorite: 'TRUE' };

              return <Post post={postInfo} key={post.postId + Date.now()} />;
            })}
          </StackGrid>
        )}
      </Grid>
    </Permit>
  );
};

Likes.defaultProps = {};

export default Likes;
