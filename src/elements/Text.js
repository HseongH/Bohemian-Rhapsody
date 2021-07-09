// LIBRARY
import React from 'react';
import styled from 'styled-components';

const TextStyle = styled.p``;

const Text = ({ children, ...props }) => {
  return <TextStyle>{children}</TextStyle>;
};

Text.defaultProps = {};

export default Text;
