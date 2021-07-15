import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import StackGrid from 'react-stack-grid';

// REDUX
import { postActions } from '../redux/modules/post';
import { searchActions } from '../redux/modules/search';
import { likeActions } from '../redux/modules/like';

// COMPONENTS
import Post from '../components/Post';

const InfinityScroll = ({ postList, page, keyword }) => {
  const dispatch = useDispatch();

  const [target, setTarget] = useState(null);

  useEffect(() => {
    const options = { threshold: 0.5 };

    const infiniteScroll = ([entries], observer) => {
      if (entries.isIntersecting) {
        new Promise((resolve) => {
          if (page === 'Home') resolve(dispatch(postActions.getPostListDB()));
          if (page === 'Search') resolve(dispatch(searchActions.searchPostDB(keyword)));
          if (page === 'Like') resolve(dispatch(likeActions.getLikeListDB()));
        }).then((res) => {
          observer.unobserve(entries.target);
        });
      }
    };

    const io = new IntersectionObserver(infiniteScroll, options);
    if (target) io.observe(target);

    return () => io && io.disconnect();
  }, [target]);

  return (
    <StackGrid columnWidth={272} style={{ paddingBottom: '80px' }}>
      {postList.map((post, idx) => {
        const isLast = idx === postList.length - 1;

        return (
          <div ref={isLast ? setTarget : null} key={post.postId}>
            <Post post={post} />
          </div>
        );
      })}
    </StackGrid>
  );
};

export default InfinityScroll;
