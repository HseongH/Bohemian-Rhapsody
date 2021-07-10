// LIBRARY
import React from 'react';
import { Grid, Image } from '../elements';
import { history } from '../redux/configStore';

const Post = (props) => {
  const imgURL = {
    img1 : "https://d198w692pndujt.cloudfront.net/fileStorage/ThemusicalAdmin/Play/Image/201909030229412d3dae68b1cd416d99c7c43f605ed42e.jpg",
    img2 : "https://image.bugsm.co.kr/album/images/500/202509/20250975.jpg",
    img3 : "https://img.etoday.co.kr/pto_db/2018/04/600/20180430103659_1208761_1000_1000.jpg",
    img4 : "https://mblogthumb-phinf.pstatic.net/20141124_271/122qww_1416800210243ibMUk_JPEG/1.jpg?type=w2",
    img5 : "http://ticketimage.interpark.com/PlayDictionary/DATA/PlayDic/PlayDicUpload/Magazine/2018/11/29_143712.jpg",
    img6 : "http://image.yes24.com/momo/TopCate678/MidCate004/67730885.jpg",
    img7 : "https://newsimg.sedaily.com/2017/12/29/1OP1L21L92_2.jpg",
    img8 : "http://ojsfile.ohmynews.com/PHT_IMG_FILE/2021/0309/IE002770932_PHT.jpg",
    img9 : "https://cdnimg.melon.co.kr/cm/album/images/022/44/822/2244822_500.jpg",
    img10 : "https://img.hankyung.com/photo/202001/BF.21391966.1-1200x.jpg",
    img11 : "https://blog.kakaocdn.net/dn/cUCWUH/btqURvF2Th8/ID4oKZhNTRAl1LfL7PfyH1/img.jpg",
    img12 : "http://image.yes24.com/momo/TopCate489/MidCate008/48870721(1).jpg",
  }
  return (
    <React.Fragment>
      <Grid width="252px" radius="20px" margin="10px" hoverShadow
        _onClick={() => {
          history.push('/detail');
        }}
      >
            <Image/>
      </Grid>
    </React.Fragment>
  )
};

Post.defaultProps = {};

export default Post;
