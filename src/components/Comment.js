// LIBRARY
import React from 'react';

// ELEMENTS
import { Input, Grid, Text } from '../elements/index';

const Comment = (props) => {
  return (
    <>
      <Input placeholder="댓글을 입력해주세요." />

      <Grid padding="10px 15px" radius="10px" margin="10px 0" style={{ border: '1px solid #ccc' }}>
        <strong>유저 아이디</strong>

        <Text fontSize="14px" margin="8px 0 0">
          댓글 작성
        </Text>
      </Grid>
    </>
  );
};

export default Comment;
