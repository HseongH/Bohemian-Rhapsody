//LIBRARY
import React from 'react';

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

//Icons
import EmojiSymbolsIcon from '@material-ui/icons/EmojiSymbols';
import PersonIcon from '@material-ui/icons/Person';

const Header = (props) => {
  const dispatch = useDispatch();

  const is_login = useSelector((state) => state.user.is_login);
  return (
    <React.Fragment>
      <Grid is_flex height="100px">
        <Button
          clickEvent={() => {
            history.push('/');
          }}
        >
          <EmojiSymbolsIcon style={{ fontSize: '35px' }} />
        </Button>

        <Input padding="20px 15px" placeholder="Search" margin="0 20px 0" style={{ flex: 1 }} />

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
            top="83px"
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
    </React.Fragment>
  );
};

Header.defaultProps = {};

export default Header;
