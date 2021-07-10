// LIBRARY
import React from 'react';

//Elements
import { Input, Grid, Button } from '../elements';

//Icons
import HomeIcon from '@material-ui/icons/Home';
import { history } from '../redux/configStore';

const Header = (props) => {
  return (
    <React.Fragment>
      <Grid is_flex>
        <Button clickEvent={() => {history.push('/');}}><HomeIcon/></Button>
        <Input placeholder="Search" margin="0 20px 0" style={{ flex: 1 }} />
        <Button>LOGIN</Button>
      </Grid>
    </React.Fragment>
  );
};

Header.defaultProps = {};

export default Header;
