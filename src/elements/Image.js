// LIBRARY
import React from 'react';
import styled from 'styled-components';

const ImageStyle = styled.img`
  width: 100%;
`;

const Image = (props) => {
  const { src, alt } = props;

  if (src) return <ImageStyle src={src} alt={alt} />;
  else return null;
};

Image.defaultProps = {};

export default Image;
