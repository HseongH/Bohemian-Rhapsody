// LIBRARY
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { postActions } from '../redux/modules/post';
import moment from 'moment';

// PAGES
import Write from './Write';

const Modify = ({ match }) => {
  const dispatch = useDispatch();
  const { postId } = match.params;
  const postInfo = useSelector((state) => state.post.post);

  useEffect(() => {
    dispatch(postActions.getOnePostDB(postId));
  }, [postId]);

  if (postInfo) {
    const date = moment.utc(postInfo.showDate).format('YYYY-MM-DD');
    const post = { ...postInfo, showDate: date };

    return <Write postInfo={post} />;
  } else return null;
};

Modify.defaultProps = {};

export default Modify;
