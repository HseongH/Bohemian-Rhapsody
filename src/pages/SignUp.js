// LIBRARY
import React from 'react';

//Elements
import { Text, Title, Input, Grid, Button } from '../elements'

const SignUp = (props) => {
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
        <Grid padding='16px'>
          <Title>SIGN UP</Title>

          <Grid padding="16px 0px">
            <Text fontSize="12px" lineHeight="2" textIndent="15px">
              ID :
            </Text>
            <Input placeholder="새로 생성할 ID를 입력해 주세요."
              keyPress={(e) => {
                console.log(e.target.value)
              }}
            />
          </Grid>
          <Grid padding="16px 0px">
            <Text fontSize="12px" lineHeight="2" textIndent="15px">
              PASSWORD :
            </Text>
            <Input label="패스워드" placeholder="패스워드를 입력해주세요. (6자 이상)" type="password"
              keyPress={(e) => {
                console.log(e.target.value)
              }}
            />
          </Grid>
          <Grid padding="16px 0px 50px 0px">
            <Text fontSize="12px" lineHeight="2" textIndent="15px">
              PASSWORD CHECK:
            </Text>
            <Input label="패스워드 확인" placeholder="패스워드를 한번 더 입력해주세요." type="password"
              keyPress={(e) => {
                console.log(e.target.value)
              }}
            />
          </Grid>

          <Grid padding="16px 0px">
            <Button width="100%" height="auto" padding="12px 0" radius="20px"
              clickEvent={() => { console.log("회원가입!"); }}>회원가입 하기</Button>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  )
};

SignUp.defaultProps = {};

export default SignUp;
