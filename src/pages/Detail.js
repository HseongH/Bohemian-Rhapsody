// LIBRARY
import React from 'react';

// ELEMENTS
import { Button, Grid, Image, Title, Text } from '../elements/index';

// ICON
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

const Detail = (props) => {
  return (
    <Grid
      width="980px"
      is_flex="space-between"
      margin="50px auto"
      padding="30px 40px"
      radius="20px"
      style={{ boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' }}
    >
      <Grid width="55%">
        <Image />
      </Grid>

      <Grid>
        <Grid is_flex="space-between" style={{ flex: 1 }}>
          <Button
            width="40px"
            height="40px"
            bg="#fff"
            hoverColor="#EFEFEF"
            color="inherit"
            fontSize="22px"
          >
            <MoreHorizIcon />
          </Button>

          <Button width="auto" height="auto" padding="12px 15px" radius="30px">
            저장
          </Button>
        </Grid>

        <Title fontSize="28px" margin="30px 0">
          임시 타이틀
        </Title>
        <Text fontSize="20px">가수 이름</Text>
        <Text color="#a5a5a5">2021.07.10</Text>
      </Grid>
    </Grid>
  );
};

Detail.defaultProps = {};

export default Detail;
