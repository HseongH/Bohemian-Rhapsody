// LIBRARY
import React, { useState } from 'react';
import styled from 'styled-components';

// ELEMENTS
import { Grid, Button, Input, Text } from '../elements/index';

// ICON
import InsertPhotoIcon from '@material-ui/icons/InsertPhoto';

const LabelStyle = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  cursor: pointer;
  font-size: 20px;
  border: dashed #ddd;
  border-radius: 10px;
`;

const InputFile = styled.input`
  width: 1px;
  height: 1px;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
`;

const Write = (props) => {
  const [height, setHeight] = useState('450px');

  return (
    <Grid
      width="980px"
      is_flex="space-between"
      margin="50px auto"
      padding="30px 40px"
      bg="#eee"
      radius="20px"
    >
      <Grid
        width="380px"
        bg="#fff"
        padding="20px"
        radius="10px"
        margin="0 30px 0 0"
        style={{ height: `${height}`, position: 'relative' }}
      >
        <LabelStyle htmlFor="input--file">
          <InsertPhotoIcon />
          이미지 추가
        </LabelStyle>
        <InputFile type="file" id="input--file" />
      </Grid>

      <Grid style={{ flex: 1 }}>
        <Input
          fontSize="23px"
          placeholder="제목을 입력해주세요."
          margin="40px 0"
          style={{ fontWeight: 700 }}
        />
        <Input margin="0 0 40px" placeholder="가수 이름을 입력해주세요." />
        <Text fontSize="12px" lineHeight="2" textIndent="15px">
          발매 일자 / 공연 일자를 선택해 주세요.
        </Text>
        <Input margin="0 0 40px" type="date" />

        <Button width="100%" height="auto" padding="12px 0" radius="20px">
          작성 완료
        </Button>
      </Grid>
    </Grid>
  );
};

Write.defaultProps = {};

export default Write;
