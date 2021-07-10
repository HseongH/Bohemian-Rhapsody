// LIBRARY
import React from 'react';
import { Grid, Image } from '../elements';

const Post = (props) => {
  return (
    <React.Fragment>
      <Grid width="252px" radius="20px" margin="10px">
        <Image src="http://ui.ssgcdn.com/cmpt/banner/202103/2021032509540448772796294379_265.jpg" />
      </Grid>
    </React.Fragment>
  )
};

Post.defaultProps = {};

export default Post;
