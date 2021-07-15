// LIBRARY
import React from 'react';
import styled from 'styled-components';

// ELEMENTS
import { Image, Favorite } from '../elements';
import Permit from './Permit';

// HISTORY
import { history } from '../redux/configStore';

const PostStyle = styled.div`
  width: 252px;
  border-radius: 20px;
  margin: 10px;
  overflow: hidden;
  position: relative;
  cursor: pointer;

  div {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    display: none;

    button {
      position: absolute;
      top: 10px;
      right: 10px;
    }
  }

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px,
      rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px,
      rgba(0, 0, 0, 0.07) 0px 16px 16px;
    & div {
      display: block;
    }
  }
`;

const Post = ({ post }) => {
  return (
    <PostStyle
      onClick={() => {
        history.push(`/detail/${post.postId}`);
      }}
      key={post.postId}
    >
      <Image src={post.img} />

      <Permit>
        <div>
          <Favorite postId={post.postId} favorite={post.favorite} />
        </div>
      </Permit>
    </PostStyle>
  );
};

Post.defaultProps = {};

export default Post;
