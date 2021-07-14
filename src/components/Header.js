//LIBRARY
import React, { useEffect, useState } from 'react';
import { css } from 'styled-components';

//ELEMENTS
import { Input, Grid, Button } from '../elements';

//COMPONENTS
import Dropdown from './Dropdown';

//HISTORY
import { history } from '../redux/configStore';

//REDUX-ACTION & REACT-HOOK
import { userActions } from '../redux/modules/user';
import { useSelector, useDispatch } from 'react-redux';
import { postActions } from '../redux/modules/post';

// FUNCTION
import { searchKeywordValidation } from '../common/validation';

//Icons
import EmojiSymbolsIcon from '@material-ui/icons/EmojiSymbols';
import PersonIcon from '@material-ui/icons/Person';

const Header = (props) => {
  const dispatch = useDispatch();
  const is_login = useSelector((state) => state.user.is_login);

  const [shadow, setShadow] = useState('none');

  const scrollEvent = () => {
    const scrollTop = window.scrollY;

    if (scrollTop > 30) {
      setShadow('rgba(99, 99, 99, 0.2) 0px 2px 8px 0px');
      return;
    }

    setShadow('none');
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollEvent);

    return () => window.removeEventListener('scroll', scrollEvent);
  });

  return (
    <Grid
      height="100px"
      bg="#fff"
      overflow="visible"
      shadow={shadow}
      style={{ position: 'fixed', top: 0, left: 0, zIndex: 9 }}
    >
      <Grid
        is_flex
        height="100px"
        width="1440px"
        overflow="visible"
        margin="0 auto"
        style={{ position: 'relative', minWidth: '450px' }}
        laptoptStyle={() => {
          return css`
            width: 90%;
          `;
        }}
        mobileStyle={() => {
          return css`
            width: 95%;
          `;
        }}
      >
        <Button
          clickEvent={() => {
            history.push('/');
          }}
        >
          <EmojiSymbolsIcon style={{ fontSize: '35px' }} />
        </Button>

        <Input
          padding="20px 15px"
          placeholder="Search"
          margin="0 20px 0"
          style={{ flex: 1 }}
          keyPress={(event) => {
            if (event.key === 'Enter' && event.target.value) {
              if (!searchKeywordValidation(event.target.value)) {
                window.alert(
                  '검색할 수 없는 단어가 포함되어 있습니다. (숫자, 문자, 공백만 사용할 수 있습니다.)'
                );
                return;
              }

              history.push(`/search?keyword=${event.target.value}`);
              dispatch(postActions.searchPostDB(event.target.value));
            }
          }}
        />

        {is_login ? (
          <Dropdown
            contents={['로그아웃', '즐겨찾기']}
            clickEvent={[
              () => {
                dispatch(userActions.logOut({}));
                history.push('/login');
              },
              () => {
                history.push('/likes');
              },
            ]}
            icon={<PersonIcon />}
            top="85px"
            pos="110px"
          />
        ) : (
          <Dropdown
            contents={['로그인', '회원가입']}
            clickEvent={[
              () => {
                history.push('/login');
              },
              () => {
                history.push('/signup');
              },
            ]}
            icon={<PersonIcon />}
            top="83px"
            pos="110px"
          />
        )}
      </Grid>
    </Grid>
  );
};

Header.defaultProps = {};

export default Header;
