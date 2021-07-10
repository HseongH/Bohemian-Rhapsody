// LIBRARY
import React from 'react';

//Elements
import { Input, Grid, Button } from '../elements';

// COMPONENTS
import Dropdown from './Dropdown';

// HISTORY
import { history } from '../redux/configStore';

//Icons
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import SearchIcon from '@material-ui/icons/Search';


const Header = (props) => {
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
          clickEvent={[() => {history.push('/login');}, ()=>{history.push('/signup');}]}
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
