import React from 'react';
import _ from 'lodash';

const InfinityScroll = (props) => {
  const { children, callNext, is_next, loading } = props;
  // 쓰로틀 적용하기.
  const _handleScroll = _.throttle(() => {
    if (loading) {
      return;
    }
    const { innerHeight } = window;
    const { scrollHeight } = document.body;

    // 스크롤을 움직인 만큼 계산하기.
    const scrollTop =
      (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;

    if (scrollHeight - innerHeight - scrollTop < 200) {
      // 로딩 중이면 다음 걸 부르면 안되겠죠!
      if (loading) {
        return;
      }

      callNext();
    }
  }, 300);

  const handleScroll = React.useCallback(_handleScroll, [loading]);

  React.useEffect(() => {
    // 로딩 중이면, return!
    if (loading) {
      return;
    }

    // 다음 게 있으면 이벤트를 붙이고, 없으면 이벤트를 삭제함.
    if (is_next) {
      window.addEventListener('scroll', handleScroll);
    } else {
      window.removeEventListener('scroll', handleScroll);
    }

    // useEffect cleanup 한다. -> 화면에 없으면 구독을 해제 함.
    return () => window.removeEventListener('scroll', handleScroll);
  }, [is_next, loading]);

  return <React.Fragment>{children}</React.Fragment>;
};

InfinityScroll.defaultProps = {
  children: null,
  callNext: () => {},
  is_next: false,
  loading: false,
};

export default InfinityScroll;
