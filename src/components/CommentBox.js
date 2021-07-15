// LIBRARY
import React from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

// REDUX
import { commentActions } from '../redux/modules/comment';

// ELEMENTS
import { Button, Input } from '../elements/index';

// COMPONENTS
import Comment from './Comment';

const CommentWrapStyle = styled.div`
  max-height: 200px;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 3px;
    background-color: #eee;
  }

  &::-webkit-scrollbar-button {
    width: 0;
    height: 0;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
`;

const CommentBox = ({ postId }) => {
  const dispatch = useDispatch();

  const { commentList, start } = useSelector(
    (state) => ({
      commentList: state.comment.list,
      start: state.comment.start,
    }),
    shallowEqual
  );

  const createComment = (contents) => {
    dispatch(commentActions.addCommentDB(postId, contents));
  };

  return (
    <>
      <Input
        placeholder="댓글을 입력해주세요."
        keyPress={(event) => {
          if (event.key === 'Enter' && event.target.value) {
            createComment(event.target.value);
            event.target.value = '';
          }
        }}
      />

      <CommentWrapStyle>
        {commentList.map((comment) => (
          <Comment comment={comment} key={comment.commentId + Date.now()} />
        ))}

        {start ? (
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
              dispatch(commentActions.getCommentListDB(postId));
            }}
          >
            댓글 더 보기
          </Button>
        ) : null}
      </CommentWrapStyle>
    </>
  );
};

export default CommentBox;
