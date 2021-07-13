// LIBRARY
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import StackGrid from 'react-stack-grid';
import { css } from 'styled-components';

// ELEMENTS
import { Button, Grid, Image, Title, Text } from '../elements/index';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

// COMPONENTS
import Post from '../components/Post';
import Permit from '../components/Permit';

// REDUX
import { postActions } from '../redux/modules/post';

// HISTORY
import { history } from '../redux/configStore';

// COMPONENTS
import Dropdown from '../components/Dropdown';

const Detail = ({ match }) => {
  const { postId } = match.params;
  const dispatch = useDispatch();

  const posts = useSelector((state) => state.post);
  const postList = posts.list;
  const postInfo = posts.post;

  useEffect(() => {
    dispatch(postActions.getOnePostDB(postId));
    dispatch(postActions.getPostListDB());
  }, [postId]);

  if (postInfo) {
    return (
      <>
        <Grid
          width="820px"
          is_flex="space-between"
          verSort="start"
          margin="50px auto"
          padding="30px 40px"
          radius="20px"
          shadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
          tabletStyle={() => {
            return css`
              display: block;
              width: auto;
              max-width: 430px;
            `;
          }}
          mobileStyle={() => {
            return css`
              width: 390px;
              padding: 20px;
            `;
          }}
        >
          <Grid width="350px" margin="0 30px 0 0" radius="20px">
            <Image src={postInfo.img} />
          </Grid>

          <Grid
            style={{ flex: 1, position: 'relative' }}
            overflow="visible"
            tabletStyle={() => {
              return css`
                margin-top: 20px;
              `;
            }}
          >
            <Grid is_flex="space-between">
              <Dropdown
                contents={['수정', '삭제']}
                clickEvent={[
                  () => {
                    history.push(`/modify/${postId}`);
                  },
                  () => {
                    postActions.deletePostDB(postId);
                  },
                ]}
                icon={<MoreHorizIcon />}
                width="40px"
                height="40px"
                bg="#fff"
                hoverColor="#EFEFEF"
                color="inherit"
                fontSize="22px"
              />

              <Permit>
                <Button width="auto" height="auto" padding="12px 15px" radius="30px">
                  저장
                </Button>
              </Permit>
            </Grid>

            <Title fontSize="28px" margin="30px 0">
              {postInfo.title}
            </Title>

            <Text fontSize="20px" margin="0 0 30px">
              {postInfo.artist}
            </Text>

            <Text color="#a5a5a5" margin="0 0 30px">
              {postInfo.showDate}
            </Text>

            <Text>{postInfo.description}</Text>
          </Grid>
        </Grid>

        <StackGrid columnWidth={272} style={{ paddingBottom: '80px' }}>
          {postList.map((post) => {
            if (post.postId === parseInt(postId)) return null;

            return <Post post={post} key={post.postId + Date.now()} />;
          })}
        </StackGrid>
      </>
    );
  } else {
    return null;
  }
};

Detail.defaultProps = {};

export default Detail;
