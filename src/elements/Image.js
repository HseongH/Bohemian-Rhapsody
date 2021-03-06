// LIBRARY
import React from 'react';
import styled from 'styled-components';

const ImageStyle = styled.img`
  width: 100%;
  display: block;
  cursor: pointer;
`;

const LazyImage = (props) => {
  const { src, alt } = props;

  if (src) return <ImageStyle src={src} alt={alt} />;
  else return null;
};

export default LazyImage;
