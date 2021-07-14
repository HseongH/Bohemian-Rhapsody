// LIBRARY
import React, { useEffect, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import StackGrid from 'react-stack-grid';
import { css } from 'styled-components';
import moment from 'moment';

// ELEMENTS
import { Button, Grid, Image, Title, Text, Favorite } from '../elements/index';

// COMPONENTS
import Post from '../components/Post';
import Permit from '../components/Permit';
import CommentBox from '../components/CommentBox';

// REDUX
import { postActions } from '../redux/modules/post';
import { commentActions } from '../redux/modules/comment';

// HISTORY
import { history } from '../redux/configStore';

// COMPONENTS
import Dropdown from '../components/Dropdown';

// ICON
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

const Detail = ({ match }) => {
  const { postId } = match.params;
  const dispatch = useDispatch();

  const { userId, postList, postInfo, commentList } = useSelector(
    (state) => ({
      userId: state.user.userId,
      postList: state.post.list,
      postInfo: state.post.post,
      commentList: state.comment.list,
    }),
    shallowEqual
  );

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    dispatch(postActions.getOnePostDB(postId));
    dispatch(commentActions.getCommentListDB(postId));

    return () => {
      dispatch(postActions.getOnePost(null));
      dispatch(commentActions.getCommentList([]));
    };
  }, [postId]);

  useEffect(() => {
    dispatch(postActions.getPostListDB());

    return () => {
      dispatch(postActions.getPostList([]));
    };
  }, []);

  if (postInfo) {
    const date = moment.utc(postInfo.showDate).format('YYYY.MM.DD');

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
              {userId === postInfo.userId && (
                <Dropdown
                  contents={['수정', '삭제']}
                  clickEvent={[
                    () => {
                      history.push(`/modify/${postId}`);
                    },
                    () => {
                      dispatch(postActions.deletePostDB(postId));
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
              )}

              <Permit>
                <Favorite postId={postId} favorite={postInfo.favorite} />
              </Permit>
            </Grid>

            <Title fontSize="28px" margin="30px 0">
              {postInfo.title}
            </Title>

            <Text fontSize="20px" margin="0 0 30px">
              {postInfo.artist}
            </Text>

            <Text color="#a5a5a5" margin="0 0 30px">
              {date}
            </Text>

            <Text>{postInfo.description}</Text>

            <Button
              width="auto"
              height="auto"
              padding="0"
              bg="none"
              radius="0"
              color="#6c757d"
              margin="30px 0 20px"
              hoverColor="none"
              clickEvent={() => {
                setVisible((visible) => !visible);
              }}
            >
              {visible ? '댓글 숨기기' : '댓글 보기'}
            </Button>

            {visible ? <CommentBox postId={postId} commentList={commentList} /> : null}
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
