// LIBRARY
import React from 'react';
// import styled from 'styled-components';

// ELEMENTS
import { Grid, Button, Input } from '../elements/index';

const Write = (props) => {
  return (
    <Grid
      is_flex="space-between"
      margin="0 auto"
      padding="20px 30px"
      bg="#eee"
      style={{ borderRadius: '20px' }}
    >
      <Grid padding="10px" style={{ borderRadius: '10px' }}>
        <label htmlFor="input--file">이미지 추가</label>
        <input type="file" id="input--file" />
      </Grid>

      <Grid>
        <Input fontSize="23px" style={{ fontWeight: 700 }} />
      </Grid>
    </Grid>
  );
};

Write.defaultProps = {};

export default Write;
