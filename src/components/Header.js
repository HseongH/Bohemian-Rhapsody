// LIBRARY
import React from 'react';
import { Input, Grid, Button } from '../elements';

const Header = (props) => {
  return (
    <React.Fragment>
      <Grid is_flex>
        <Button>HOME</Button>
        <Input placeholder="Search" margin="0 20px 0" style={{ flex: 1 }} />
        <Button>Logout</Button>
      </Grid>
    </React.Fragment>
  );
};

Header.defaultProps = {};

export default Header;
