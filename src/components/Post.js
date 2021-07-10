// LIBRARY
import React from 'react';
import { Grid, Image } from '../elements';
import { history } from '../redux/configStore';

const Post = (props) => {
  const post = props.post;

  return (
    <Grid
      width="252px"
      radius="20px"
      margin="10px"
      hoverShadow
      _onClick={() => {
        history.push('/detail');
      }}
    >
      <Image src={post.imgURL} />
    </Grid>
  );
};

Post.defaultProps = {};

export default Post;
