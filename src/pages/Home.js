// LIBRARY
import React from 'react';
import StackGrid from 'react-stack-grid';
import { Grid } from '../elements';
import Post from '../components/Post'

const Home = (props) => {
  const result = [
    { imgURL: 'https://d198w692pndujt.cloudfront.net/fileStorage/ThemusicalAdmin/Play/Image/201909030229412d3dae68b1cd416d99c7c43f605ed42e.jpg' },
    { imgURL: 'https://image.bugsm.co.kr/album/images/500/202509/20250975.jpg' },
    { imgURL: 'https://img.etoday.co.kr/pto_db/2018/04/600/20180430103659_1208761_1000_1000.jpg' },
    { imgURL: 'https://mblogthumb-phinf.pstatic.net/20141124_271/122qww_1416800210243ibMUk_JPEG/1.jpg?type=w2' },
    { imgURL: 'http://ticketimage.interpark.com/PlayDictionary/DATA/PlayDic/PlayDicUpload/Magazine/2018/11/29_143712.jpg' },
    { imgURL: 'http://image.yes24.com/momo/TopCate678/MidCate004/67730885.jpg' },
    { imgURL: 'https://newsimg.sedaily.com/2017/12/29/1OP1L21L92_2.jpg' },
    { imgURL: 'http://ojsfile.ohmynews.com/PHT_IMG_FILE/2021/0309/IE002770932_PHT.jpg' },
    { imgURL: 'https://cdnimg.melon.co.kr/cm/album/images/022/44/822/2244822_500.jpg' },
    { imgURL: 'https://img.hankyung.com/photo/202001/BF.21391966.1-1200x.jpg' },
    { imgURL: 'https://blog.kakaocdn.net/dn/cUCWUH/btqURvF2Th8/ID4oKZhNTRAl1LfL7PfyH1/img.jpg' },
    { imgURL: 'http://image.yes24.com/momo/TopCate489/MidCate008/48870721(1).jpg' },
  ];

  return (
    <StackGrid columnWidth={272} style={{ paddingBottom: '80px' }}>
      {result.map((post, idx) => {
        return <Post post={post} key={idx} />;
      })}
    </StackGrid>
  )
};

Home.defaultProps = {};

export default Home;
