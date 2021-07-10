import React from 'react';

// ELEMENTS
import { Button, Grid } from '../elements/index';

// HISTORY
import { history } from '../redux/configStore';

// ICON
import AddIcon from '@material-ui/icons/Add';
import BookmarkIcon from '@material-ui/icons/Bookmark';

const AddBtn = (props) => {
  return (
    <Grid
      style={{ position: 'fixed', bottom: '30px', right: '55px', zIndex: 99 }}
      width="60px"
      height="130px"
      overflow="visible"
    >
      <Button
        shadow="rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;"
        margin="0 0 10px"
        clickEvent={() => {
          history.push('/write');
        }}
      >
        <AddIcon />
      </Button>

      <Button
        shadow="rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;"
        clickEvent={() => {
          history.push('/likes');
        }}
      >
        <BookmarkIcon />
      </Button>
    </Grid>
  );
};

AddBtn.defaultProps = {};

export default AddBtn;
