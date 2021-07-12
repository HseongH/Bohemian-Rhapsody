// LIBRARY
import React from 'react';

//Elements
import { Text, Title, Input, Grid, Button } from '../elements';

//REDUX-ACTION & REACT-HOOK
import { userActions } from '../redux/modules/user';
import { useDispatch, useSelector } from 'react-redux';

const SignUp = (props) => {
  const dispatch = useDispatch();

  const [id, setId] = React.useState('');
  const [pwd, setPwd] = React.useState('');
  const [pwd_check, setPwdCheck] = React.useState('');

  const dupState = useSelector((state) => state.user.is_check);

  const signup = () => {
    if (id === '' || pwd === '') {
      return window.alert('아이디, 패스워드를 모두 입력해 주세요.');
    }

    if (pwd !== pwd_check) {
      return window.alert('패스워드를 다시 확인해 주세요.');
    }

    dispatch(userActions.signupDB(id, pwd));
  };

  const nickname = () => {
    console.log(id);
    dispatch(userActions.nickCheck(id));
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
          <Title>SIGN UP</Title>

          <Grid padding="16px 0px 0px">
            <Text fontSize="12px" lineHeight="2" textIndent="15px">
              {dupState ? '사용 가능한 아이디입니다.' : null}
            </Text>
          </Grid>
          <Grid is_flex padding="16px 0px">
            <Input
              placeholder="새로 생성할 ID를 입력해 주세요."
              changeEvent={(event) => {
                setId(event.target.value);
              }}
              padding="14px 17px"
            />
            <Button
              margin="0px 0px 0px 6px"
              width="30%"
              height="auto"
              padding="7px 0"
              radius="20px"
              clickEvent={nickname}
            >
              중복 확인
            </Button>
          </Grid>
          <Grid padding="16px 0px">
            <Text fontSize="12px" lineHeight="2" textIndent="15px"></Text>
            <Input
              label="패스워드"
              placeholder="패스워드를 입력해주세요. (6자 이상)"
              type="password"
              changeEvent={(e) => {
                setPwd(e.target.value);
              }}
              padding="14px 17px"
            />
          </Grid>
          <Grid padding="16px 0px 50px 0px">
            <Text fontSize="12px" lineHeight="2" textIndent="15px"></Text>
            <Input
              label="패스워드 확인"
              placeholder="패스워드를 한번 더 입력해주세요."
              type="password"
              changeEvent={(e) => {
                setPwdCheck(e.target.value);
              }}
              padding="14px 17px"
            />
          </Grid>

          <Grid padding="16px 0px">
            <Button width="100%" height="auto" padding="12px 0" radius="20px" clickEvent={signup}>
              회원가입 하기
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

SignUp.defaultProps = {};

export default SignUp;
