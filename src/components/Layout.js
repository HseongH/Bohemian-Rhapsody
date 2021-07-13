import React from 'react';
import styled from 'styled-components';

const OuterStyle = styled.div`
  font-size: 16px;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 400;
  line-height: 1.25;
  color: #212529;
  max-width: 1440px;
  position: relative;
  margin: 0 auto;

  @media ${(props) => props.theme.laptop} {
    max-width: none;
    width: 90%;
  }

  @media ${(props) => props.theme.tablet} {
    width: 95%;
  }
`;

const Layout = ({ children }) => {
  return <OuterStyle>{children}</OuterStyle>;
};

export default Layout;
