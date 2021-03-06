// LIBRARY
import React from 'react';
import _ from 'lodash';
import { css } from 'styled-components';

//Elements
import { Text, Title, Input, Grid, Button } from '../elements';

//HISTORY
import { history } from '../redux/configStore';

//REDUX-ACTION & REACT-HOOK
import { userActions } from '../redux/modules/user';
import { useDispatch, useSelector } from 'react-redux';

//VALIDATION
import { idVal, pwdVal } from '../common/validation';

const SignUp = (props) => {
  const dispatch = useDispatch();

  const dupState = useSelector((state) => state.user.is_check);

  const debounce = _.debounce((value, setValue) => setValue(value), 300);

  const [id, setId] = React.useState('');
  const [pwd, setPwd] = React.useState('');
  const [pwdCheck, setPwdCheck] = React.useState('');
  const [idConfirm, setIdConfirm] = React.useState('');
  const [pwdConfirm, setPwdConfirm] = React.useState('');
  const [pwdCheckConfirm, setPwdCheckConfirm] = React.useState('');
  const [idWarning, setIdWarColor] = React.useState('red');
  const [pwdWarning, setPwdWarColor] = React.useState('red');
  const [pwdCheckWarning, setPwdCheckWarColor] = React.useState('red');

  const checkID = (val) => {
    if (val === '') {
      setIdWarColor('red');
      setIdConfirm('아이디가 입력되지 않았습니다.');
      return;
    }
    if (!idVal(val)) {
      setIdWarColor('red');
      setIdConfirm('아이디가 형식에 맞지 않습니다. (영어, 알파벳 4~20자)');
      return;
    }

    setIdWarColor('green');
    setIdConfirm('중복 검사를 해주세요');
  };

  const checkPWD = (val) => {
    if (val === '') {
      setPwdWarColor('red');
      setPwdConfirm('패스워드가 입력되지 않았습니다.');
      return;
    }
    if (!pwdVal(val)) {
      setPwdWarColor('red');
      setPwdConfirm('패스워드가 형식에 맞지 않습니다. (영어, 알파벳 6~30자)');
      return;
    }
    setPwdWarColor('green');
    setPwdConfirm('사용가능한 패스워드 입니다.');
  };

  const checkPWD2nd = (val) => {
    if (val === '') {
      setPwdCheckWarColor('red');
      setPwdCheckConfirm('패스워드 확인란이 입력되지 않았습니다.');
      return;
    }
    if (val.length < 6) {
      setPwdCheckWarColor('red');
      setPwdCheckConfirm('');
      return;
    }
    if (val !== pwd) {
      setPwdCheckWarColor('red');
      setPwdCheckConfirm('입력된 패스워드가 서로 다릅니다.');
      return;
    }
    setPwdCheckWarColor('green');
    setPwdCheckConfirm('패스워드가 올바르게 입력되었습니다.');
  };

  const signup = () => {
    if (
      !(dupState && idWarning === 'green' && pwdWarning === 'green' && pwdCheckWarning === 'green')
    )
      return;

    dispatch(userActions.signupDB(id, pwd, pwdCheck));

    window.alert('회원가입이 완료되었습니다. 다시 로그인해 주세요.');
    history.push('/login');
  };

  const nickname = () => {
    dispatch(userActions.nickCheck(id));
    setIdConfirm('');
  };

  return (
    <React.Fragment>
      <Grid
        width="820px"
        is_flex="space-between"
        margin="50px auto"
        padding="30px 40px"
        radius="20px"
        shadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
        tabletStyle={() => {
          return css`
            width: 95%;
          `;
        }}
        mobileStyle={() => {
          return css`
            padding: 15px 20px;
            width: 100%;
          `;
        }}
      >
        <Grid padding="16px">
          <Title>SIGN UP</Title>

          <Grid padding="16px 0px 0px">
            <Text fontSize="12px" color={idWarning} lineHeight="2" textIndent="15px">
              {idConfirm}
            </Text>
          </Grid>
          <Grid is_flex padding="0px 0px 16px">
            <Input
              placeholder="새로 생성할 ID를 입력해 주세요."
              changeEvent={(event) => {
                setId(event.target.value);
              }}
              keyUp={(event) => {
                debounce(event.target.value, checkID);
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
            <Text fontSize="12px" color={pwdWarning} lineHeight="2" textIndent="15px">
              {pwdConfirm}
            </Text>
            <Input
              placeholder="패스워드를 입력해주세요. (6자 이상)"
              type="password"
              changeEvent={(e) => {
                setPwd(e.target.value);
              }}
              keyUp={(event) => {
                debounce(event.target.value, checkPWD);
              }}
              padding="14px 17px"
            />
          </Grid>
          <Grid padding="16px 0px 50px 0px">
            <Text fontSize="12px" color={pwdCheckWarning} lineHeight="2" textIndent="15px">
              {pwdCheckConfirm}
            </Text>
            <Input
              placeholder="패스워드를 한번 더 입력해주세요."
              type="password"
              changeEvent={(e) => {
                setPwdCheck(e.target.value);
              }}
              keyUp={(event) => {
                debounce(event.target.value, checkPWD2nd);
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
