//LIBRARY
import React from 'react';

//ELEMENTS
import { Input, Grid, Button } from '../elements';

//COOKIE
import { getCookie, deleteCookie } from '../prac/Cookie';

//COMPONENTS
import Dropdown from './Dropdown';

//HISTORY
import { history } from '../redux/configStore';

//REDUX-ACTION & REACT-HOOK
import { actionCreators as userActions } from '../redux/modules/user';
import { useSelector, useDispatch } from 'react-redux';

//Icons
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';


const Header = (props) => {
  const dispatch = useDispatch();
  const is_login = useSelector((state) => state.user.is_login);

  if (is_login) {
    return (
      <React.Fragment>
        <Grid is_flex height="100px">
          <Button
            clickEvent={() => {
              history.push('/');
            }}
          >
            <HomeIcon />
          </Button>

          <Input padding="20px 15px" placeholder="Search" margin="0 20px 0" style={{ flex: 1 }} />

          <Dropdown
            contents={['로그아웃', '즐겨찾기']}
            clickEvent={[
              () => {
                dispatch(userActions.logOut({}));
                history.push('/login');
              },
              () => {
                history.push('/detail');
              },
            ]}
            icon={<PersonIcon />}
            top="83px"
            pos="110px"
          />
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <Grid is_flex height="100px">
        <Button
          clickEvent={() => {
            history.push('/');
          }}
        >
          <HomeIcon />
        </Button>

        <Input padding="20px 15px" placeholder="Search" margin="0 20px 0" style={{ flex: 1 }} />

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
      </Grid>
    </React.Fragment>
  );
};

Header.defaultProps = {};

export default Header;
