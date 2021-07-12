//LIBRARY
import React, { useState } from 'react';

//ELEMENTS
import { Text, Title, Input, Grid, Button } from '../elements';

//HISTORY
import { history } from '../redux/configStore';

//REDUX-ACTION & REACT-HOOK
import { userActions } from '../redux/modules/user';
import { useDispatch } from 'react-redux';

const Login = (props) => {
  const dispatch = useDispatch();

  const [userInfo, setUserInfo] = useState({ nickname: '', password: '' });

  const login = () => {
    if (!(userInfo.nickname && userInfo.password)) return;

    dispatch(userActions.loginAction(userInfo));
  };

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
        <Grid padding="16px">
          <Title>LOGIN</Title>

          <Grid padding="16px 0px">
            <Text fontSize="12px" lineHeight="2" textIndent="15px">
              ID :
            </Text>
            <Input
              placeholder="아이디를 입력해주세요."
              changeEvent={(event) => {
                setUserInfo({ ...userInfo, nickname: event.target.value });
              }}
            />
          </Grid>

          <Grid padding="16px 0px 50px 0px">
            <Text fontSize="12px" lineHeight="2" textIndent="15px">
              PASSWORD :
            </Text>
            <Input
              placeholder="패스워드를 입력해주세요."
              type="password"
              changeEvent={(event) => {
                setUserInfo({ ...userInfo, password: event.target.value });
              }}
            />
          </Grid>

          <Grid padding="5px 0px">
            <Text fontSize="12px" lineHeight="2" textIndent="15px">
              혹시 회원이 아니신가요?
            </Text>
            <Button
              width="100%"
              height="auto"
              padding="12px 0"
              radius="20px"
              bg="#EFEFEF"
              hoverColor="#ccc"
              color="inherit"
              clickEvent={() => {
                history.push('/signup');
              }}
            >
              회원가입 하러가기
            </Button>
          </Grid>
          <Grid padding="16px 0px 0px 0px">
            <Button width="100%" height="auto" padding="12px 0" radius="20px" clickEvent={login}>
              로그인 하기
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

Login.defaultProps = {};

export default Login;
