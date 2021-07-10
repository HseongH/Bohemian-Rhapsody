// LIBRARY
import React from 'react';

//Elements
import { Text, Title, Input, Grid, Button } from '../elements'

const Login = (props) => {
  return (
    <React.Fragment>
      <Grid
        width="820px"
        is_flex="space-between"
        margin="50px auto"
        padding="30px 40px"
        radius="20px"
        shadow
      >
        <Grid padding='1px'>
          <Title>LOGIN</Title>

          <Grid padding="16px 0px">
            <Text fontSize="12px" lineHeight="2" textIndent="15px">
              ID :
            </Text>
            <Input label="아이디" placeholder="아이디를 입력해주세요."
              keyPress={(e) => {
                console.log(e.target.value);
              }}
            />
          </Grid>

          <Grid padding="16px 0px">
            <Text fontSize="12px" lineHeight="2" textIndent="15px">
              PASSWORD :
            </Text>
            <Input label="패스워드" placeholder="패스워드를 입력해주세요." type="password"
              keyPress={(e) => {
                console.log(e.target.value);
              }}
            />
          </Grid>

          <Grid padding="16px 0px">
            <Button width="100%" height="auto" padding="12px 0" radius="20px"
              clickEvent={() => { console.log("로그인!!"); }}>로그인 하기</Button>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  )
};

Login.defaultProps = {};

export default Login;
