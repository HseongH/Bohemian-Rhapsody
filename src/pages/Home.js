// LIBRARY
import React from 'react';
import { Grid, Image } from '../elements';
import Post from '../components/Post'

const Home = (props) => {
  return (
    <React.Fragment>
      <Grid style={{flexWrap: "wrap"}} is_flex padding="10px 15px 15px 15px">
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </Grid>
    </React.Fragment>
  )
};

Home.defaultProps = {};

export default Home;
