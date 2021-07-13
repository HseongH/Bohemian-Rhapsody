// LIBRARY
import React from 'react';

//Elements
import { Text, Title, Input, Grid, Button } from '../elements';

//HISTORY
import { history } from '../redux/configStore';

//REDUX-ACTION & REACT-HOOK
import { userActions } from '../redux/modules/user';
import { useDispatch, useSelector } from 'react-redux';
import { IndeterminateCheckBox } from '@material-ui/icons';

//VALIDATION
import { idVal, pwdVal } from '../common/validation';

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

    dispatch(userActions.signupDB(id, pwd, pwd_check));
    window.alert("회원가입이 완료되었습니다. 다시 로그인해 주세요.")
    history.push('/login')
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
            {dupState ? (
              <Text fontSize="12px" color="green" lineHeight="2" textIndent="15px">
                사용 가능한 아이디입니다.
              </Text>
            ) : null}
          </Grid>
          <Grid is_flex padding="0px 0px 16px">
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
              padding="10px 0"
              radius="20px"
              clickEvent={nickname}
            >
              중복 확인
            </Button>
          </Grid>
          <Grid padding="16px 0px">
            <Text fontSize="12px" color="red" lineHeight="2" textIndent="15px">
              숫자, 영어 대/소문자 6 ~ 30자로 입력해주세요.
            </Text>
            <Input
              placeholder="패스워드를 입력해주세요. (6자 이상)"
              type="password"
              changeEvent={(e) => {
                setPwd(e.target.value);
              }}
              padding="14px 17px"
            />
          </Grid>
          <Grid padding="16px 0px 50px 0px">
            <Text fontSize="12px" color="red" lineHeight="2" textIndent="15px">
              패스워드가 일치하지 않습니다.
            </Text>
            <Input
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
