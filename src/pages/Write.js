// LIBRARY
import React from 'react';
// import styled from 'styled-components';

// ELEMENTS
import { Grid, Button, Input } from '../elements/index';

const Write = (props) => {
  return (
    <Grid is_flex="space-between" margin="0 auto" padding="20px 30px" bg="#eee" radius="20px">
      <Grid padding="10px" radius="10px">
        <label htmlFor="input--file">이미지 추가</label>
        <input type="file" id="input--file" />
      </Grid>

      <Grid>
        <Input fontSize="23px" placeholder="제목을 입력해주세요." style={{ fontWeight: 700 }} />
        <Input placeholder="가수 이름을 입력해주세요." />
        <Input type="date" />

        <Button width="100%" height="auto" padding="12px 0" radius="20px">
          작성 완료
        </Button>
      </Grid>
    </Grid>
  );
};

Write.defaultProps = {};

export default Write;
