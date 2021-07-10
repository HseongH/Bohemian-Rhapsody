// LIBRARY
import React from 'react';

// ELEMENTS
import { Button, Grid, Image, Title, Text } from '../elements/index';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

// COMPONENTS
import Dropdown from '../components/Dropdown';

const Detail = (props) => {
  return (
    <Grid
      width="820px"
      is_flex="space-between"
      verSort="start"
      margin="50px auto"
      padding="30px 40px"
      radius="20px"
      style={{ boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' }}
    >
      <Grid width="350px" margin="0 30px 0 0" radius="20px">
        <Image src="https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg" />
      </Grid>

      <Grid style={{ flex: 1, position: 'relative' }}>
        <Grid is_flex="space-between">
          <Button width="auto" height="auto" padding="12px 15px" radius="30px">
            저장
          </Button>

          <Dropdown
            contents={['수정', '삭제']}
            clickEvent={[() => {}, () => {}]}
            icon={<MoreHorizIcon />}
            width="40px"
            height="40px"
            bg="#fff"
            hoverColor="#EFEFEF"
            color="inherit"
            fontSize="22px"
          />
        </Grid>

        <Title fontSize="28px" margin="30px 0">
          임시 타이틀
        </Title>

        <Text fontSize="20px" margin="0 0 30px">
          가수 이름
        </Text>

        <Text color="#a5a5a5" margin="0 0 30px">
          2021.07.10
        </Text>

        <Text>상세 정보</Text>
      </Grid>
    </Grid>
  );
};

Detail.defaultProps = {};

export default Detail;
