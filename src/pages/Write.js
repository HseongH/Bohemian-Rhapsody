// LIBRARY
import React, { useState } from 'react';
import styled, { css } from 'styled-components';

// ELEMENTS
import { Grid, Button, Input, Text, Image } from '../elements/index';

// ICON
import InsertPhotoIcon from '@material-ui/icons/InsertPhoto';

const PosAbs = () => {
  return css`
    position: absolute;
    top: 0;
    left: 0;
  `;
};

const LabelStyle = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  cursor: pointer;
  font-size: 20px;
  box-sizing: border-box;
  ${PosAbs()};
  z-index: 3;
`;

const InputFile = styled.input`
  width: 1px;
  height: 1px;
  overflow: hidden;
  ${PosAbs()};
`;

const InputArea = styled.textarea`
  --lightcolor: #6c757d;

  width: 100%;
  height: 158px;
  resize: none;
  padding: 8px 15px;
  margin-bottom: 30px;
  border-radius: 20px;
  border: 1px solid #ccc;
  box-sizing: border-box;

  &:focus {
    box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 3px inset;
    outline: none;
    border: none;
  }

  &::placeholder {
    color: var(--lightcolor);
  }

  &::-webkit-input-placeholder {
    color: var(--lightcolor);
  }

  &:-ms-input-placeholder {
    color: var(--lightcolor);
  }
`;

const Write = (props) => {
  const [height, setHeight] = useState('380px');
  const [visable, setVisable] = useState(true);

  return (
    <Grid
      width="820px"
      is_flex="space-between"
      margin="50px auto"
      padding="30px 40px"
      radius="20px"
      style={{ boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' }}
    >
      <Grid width="320px" margin="0 30px 0 0">
        <Grid bg="#EFEFEF" radius="10px" style={{ height: `${height}`, position: 'relative' }}>
          <LabelStyle htmlFor="input--file">
            <InsertPhotoIcon />
            이미지 추가
          </LabelStyle>

          <InputFile type="file" id="input--file" />

          <Image style={{ position: 'absolute', left: 0, top: 0 }} />
        </Grid>

        <Grid margin="20px 0 0">
          {visable ? (
            <Button
              width="100%"
              height="auto"
              padding="12px 0"
              radius="20px"
              bg="#EFEFEF"
              hoverColor="#ccc"
              color="inherit"
              clickEvent={() => {
                setVisable((display) => !display);
              }}
            >
              URL로 추가하기
            </Button>
          ) : (
            <Input
              type="url"
              placeholder=""
              keyPress={(event) => {
                if (event.key === 'Enter') {
                  setVisable((display) => !display);
                }
              }}
            />
          )}
        </Grid>
      </Grid>

      <Grid style={{ flex: 1 }}>
        <Input
          fontSize="23px"
          placeholder="제목을 입력해주세요."
          margin="0 0 20px"
          style={{ fontWeight: 700 }}
        />

        <Input margin="0 0 20px" placeholder="가수 이름을 입력해주세요." />

        <Text fontSize="12px" lineHeight="2" textIndent="15px">
          발매 일자 / 공연 일자를 선택해 주세요.
        </Text>
        <Input margin="0 0 20px" type="date" />

        <InputArea placeholder="간단한 내용을 입력해주세요."></InputArea>

        <Button width="100%" height="auto" padding="12px 0" radius="20px">
          작성 완료
        </Button>
      </Grid>
    </Grid>
  );
};

Write.defaultProps = {};

export default Write;
