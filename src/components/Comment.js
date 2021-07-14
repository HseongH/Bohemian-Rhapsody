// LIBRARY
import React, { useState } from 'react';
import styled from 'styled-components';

// REDUX
import { commentActions } from '../redux/modules/comment';

// ELEMENTS
import { Input, Grid, Text, Button } from '../elements/index';

// COMPONENTS
import Dropdown from './Dropdown';

// ICON
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { useDispatch } from 'react-redux';

const NicknameStyle = styled.strong`
  width: 150px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const Comment = (props) => {
  const { postId, commentList } = props;

  const dispatch = useDispatch();

  const [comment, setComment] = useState('');
  const [modifyBox, setModifyBox] = useState(false);

  const createComment = (contents) => {
    dispatch(commentActions.addCommentDB(postId, contents));
  };

  const updateComment = (commentId) => {
    dispatch(commentActions.updateCommentDB(commentId, comment));
  };

  const deleteComment = (commentId) => {
    dispatch(commentActions.delCommentDB(commentId));
  };

  return (
    <>
      <Input
        placeholder="댓글을 입력해주세요."
        keyPress={(event) => {
          if (event.key === 'Enter' && event.target.value) {
            createComment(event.target.value);
          }
        }}
      />

      <Grid
        padding="10px 15px"
        radius="10px"
        margin="10px 0"
        style={{ border: '1px solid #ccc' }}
        overflow="visible"
        key={comment.commentId + Date.now()}
      >
        {!modifyBox ? (
          <>
            <Grid is_flex="space-between" overflow="visible" style={{ position: 'relative' }}>
              <NicknameStyle>유저 아이디adfawegaergvawegawefdawefawef</NicknameStyle>

              <Dropdown
                contents={['수정', '삭제']}
                clickEvent={[
                  () => {
                    setModifyBox((visible) => !visible);
                    setComment(comment);
                  },
                  () => {
                    deleteComment(comment);
                  },
                ]}
                icon={<MoreVertIcon />}
                width="30px"
                height="30px"
                bg="#fff"
                hoverColor="#EFEFEF"
                color="inherit"
                pos="145px"
                top="0"
              />
            </Grid>

            <Text fontSize="14px" margin="8px 0 0">
              댓글이다.
            </Text>
          </>
        ) : (
          <Grid>
            <Input
              margin="0 0 10px"
              placeholder="댓글을 입력해주세요."
              value={comment}
              changeEvent={(event) => {
                setComment(event.target.value);
              }}
            />

            <Button
              width="auto"
              height="auto"
              radius="8px"
              padding="5px 8px"
              fontSize="14px"
              margin="0 12px 0 0"
              clickEvent={() => {
                if (comment) updateComment(comment);
              }}
            >
              수정 완료
            </Button>
            <Button
              width="auto"
              height="auto"
              radius="8px"
              bg="#eee"
              hoverColor="#ccc"
              padding="5px 8px"
              fontSize="14px"
              color="inherit"
              clickEvent={() => {
                setModifyBox((visible) => !visible);
              }}
            >
              취소
            </Button>
          </Grid>
        )}

        <Text fontSize="14px" margin="8px 0 0">
          {comment.comment}
        </Text>
      </Grid>
      {/* {commentList.map((comment) => {
        return (
          <Grid
            padding="10px 15px"
            radius="10px"
            margin="10px 0"
            style={{ border: '1px solid #ccc' }}
            overflow="visible"
            key={comment.commentId + Date.now()}
          >
            {modifyBox ? (
              <Grid is_flex="space-between" overflow="visible" style={{ position: 'relative' }}>
                <NicknameStyle>유저 아이디adfawegaergvawegawefdawefawef</NicknameStyle>

                <Dropdown
                  contents={['수정', '삭제']}
                  clickEvent={[() => {}, () => {}]}
                  icon={<MoreVertIcon />}
                  width="30px"
                  height="30px"
                  bg="#fff"
                  hoverColor="#EFEFEF"
                  color="inherit"
                  pos="145px"
                  top="0"
                />
              </Grid>
            ) : (
              <Grid>
                <Input
                  placeholder="댓글을 입력해주세요."
                  value={comment}
                  changeEvent={(event) => {
                    setComment(event.target.value);
                  }}
                />

                <Button width="auto" height="auto" radius="0">
                  수정 완료
                </Button>
                <Button width="auto" height="auto" radius="0">
                  취소
                </Button>
              </Grid>
            )}

            <Text fontSize="14px" margin="8px 0 0">
              {comment.comment}
            </Text>
          </Grid>
        );
      })} */}
    </>
  );
};

export default Comment;
