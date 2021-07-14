// LIBRARY
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

// REDUX
import { commentActions } from '../redux/modules/comment';

// ELEMENTS
import { Grid, Button, Input, Text } from '../elements/index';

// COMPONENTS
import Dropdown from './Dropdown';

// ICON
import MoreVertIcon from '@material-ui/icons/MoreVert';

const NicknameStyle = styled.strong`
  width: 150px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const Comment = ({ comment }) => {
  const dispatch = useDispatch();

  const [modifyComment, setComment] = useState('');
  const [modifyBox, setModifyBox] = useState(false);

  const userId = useSelector((state) => state.user.userId);

  const updateComment = (commentId) => {
    dispatch(commentActions.updateCommentDB(commentId, modifyComment));
  };

  const deleteComment = (commentId) => {
    dispatch(commentActions.delCommentDB(commentId));
  };

  return (
    <Grid
      padding="10px 15px"
      radius="10px"
      margin="10px 0"
      style={{ border: '1px solid #ccc' }}
      overflow="visible"
    >
      {!modifyBox ? (
        <>
          <Grid is_flex="space-between" overflow="visible" style={{ position: 'relative' }}>
            <NicknameStyle>{comment.nickname}</NicknameStyle>

            {userId === comment.userId && (
              <Dropdown
                contents={['수정', '삭제']}
                clickEvent={[
                  () => {
                    setModifyBox((visible) => !visible);
                    setComment(comment.comment);
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
            )}
          </Grid>

          <Text fontSize="14px" margin="8px 0 0">
            {comment.comment}
          </Text>
        </>
      ) : (
        <Grid>
          <Input
            margin="0 0 10px"
            placeholder="댓글을 입력해주세요."
            value={modifyComment}
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
              if (modifyComment) updateComment(comment.commentId);
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
    </Grid>
  );
};

export default Comment;
