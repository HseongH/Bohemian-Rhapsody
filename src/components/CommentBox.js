// LIBRARY
import React from 'react';
import { useDispatch } from 'react-redux';

// REDUX
import { commentActions } from '../redux/modules/comment';

// ELEMENTS
import { Input } from '../elements/index';

// COMPONENTS
import Comment from './Comment';

const CommentBox = ({ postId, commentList }) => {
  const dispatch = useDispatch();

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

      {commentList.map((comment) => (
        <Comment comment={comment} key={comment.commentId + Date.now()} />
      ))}
    </>
  );
};

export default CommentBox;
