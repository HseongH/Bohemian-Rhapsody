import React from 'react';

// ELEMENTS
import { Button } from '../elements/index';

// ICON
import AddIcon from '@material-ui/icons/Add';

const AddBtn = (props) => {
  return (
    <Button>
      <AddIcon />
    </Button>
  );
};

AddBtn.defaultProps = {};

export default AddBtn;
