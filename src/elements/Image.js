// LIBRARY
import React from 'react';
import styled from 'styled-components';

const ImageStyle = styled.img`
  ${(props) => props.src || 'display: none;'};
  width: 100%;
`;

const Image = (props) => {
  const { src, alt } = props;

  return <ImageStyle src={src} alt={alt} />;
};

Image.defaultProps = {};

export default Image;
