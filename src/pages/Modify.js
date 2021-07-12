// LIBRARY
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { postActions } from '../redux/modules/detailPost';

// PAGES
import Write from './Write';

const Modify = ({ match }) => {
  const dispatch = useDispatch();
  const { postId } = match.params;
  const postInfo = useSelector((state) => state.postDetail.post);

  useEffect(() => {
    dispatch(postActions.getOnePostDB(postId));
  }, [postId]);

  if (postInfo) return <Write postInfo={postInfo} />;
  else return null;
};

Modify.defaultProps = {};

export default Modify;
