import React from 'react';

// ELEMENTS
import { Button } from '../elements/index';

// HISTORY
import { history } from '../redux/configStore';

// ICON
import AddIcon from '@material-ui/icons/Add';

const AddBtn = (props) => {
  return (
    <Button
      style={{ position: 'fixed', bottom: '30px', right: '55px' }}
      bg="#fff"
      color="inherit"
      hoverColor="#eee"
      shadow="rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;"
      clickEvent={() => {
        history.push('/write');
      }}
    >
      <AddIcon />
    </Button>
  );
};

AddBtn.defaultProps = {};

export default AddBtn;
