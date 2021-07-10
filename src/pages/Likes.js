// LIBRARY
import React from 'react';

// ELEMENTS
import { Button, Text, Grid, Title } from '../elements/index';

const Likes = (props) => {
  return (
    <Grid>
      <Title margin="80px 0" textAlign="center" fontSize="28px">
        유저 이름
      </Title>

      <hr color="#eee" width="100%" />

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
      >
        게시물 추가하러 가기
      </Button>
    </Grid>
  );
};

Likes.defaultProps = {};

export default Likes;
