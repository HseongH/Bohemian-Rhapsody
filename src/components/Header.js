// LIBRARY
import React from 'react';

//Elements
import { Input, Grid, Button } from '../elements';

//Icons
import HomeIcon from '@material-ui/icons/Home';

const Header = (props) => {
  return (
    <React.Fragment>
      <Grid is_flex>
        <Button><HomeIcon/></Button>
        <Input placeholder="Search" margin="0 20px 0" style={{ flex: 1 }} />
        <Button>LOGIN</Button>
      </Grid>
    </React.Fragment>
  );
};

Header.defaultProps = {};

export default Header;
