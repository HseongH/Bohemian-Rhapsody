// LIBRARY
import React from 'react';
import styled from 'styled-components';

const TitleStyle = styled.h2`
  font-size: ${(props) => props.fontSize};
  font-weight: 700;
`;

const Title = ({ children, ...props }) => {
  return <TitleStyle {...props}>{children}</TitleStyle>;
};

Title.defaultProps = {
  fontSize: '16px',
};

export default Title;
