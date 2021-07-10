// LIBRARY
import React from 'react';
import styled from 'styled-components';

const TextStyle = styled.p`
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.color};
  word-break: break-all;
  white-space: pre-line;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 7;
`;

const Text = ({ children, ...props }) => {
  return <TextStyle {...props}>{children}</TextStyle>;
};

Text.defaultProps = {
  fontSize: '16px',
  color: '#495057',
};

export default Text;
