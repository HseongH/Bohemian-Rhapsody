// LIBRARY
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// REDUX
import { postActions } from '../redux/modules/detailPost';

// PAGES
import Write from './Write';

const Modify = (props) => {
  const dispatch = useDispatch();
  const postInfo = useSelector((state) => state.postDetail.post);

  useEffect(() => {
    dispatch(postActions.getOnePostDB(postInfo.postId));
  }, []);

  return <Write postInfo={postInfo} />;
};

Modify.defaultProps = {};

export default Modify;
