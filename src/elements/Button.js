// LIBRARY
import React from 'react';
import styled from 'styled-components';

const ButtonStyle = styled.button`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  color: ${(props) => props.color};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  border-radius: ${(props) => props.radius};
  font-size: ${(props) => props.fontSize};
  background: ${(props) => props.bg};
  box-shadow: ${(props) => props.shadow};
  box-sizing: border-box;
  border: none;
  cursor: pointer;
  display: ${(props) => props.display};
  justify-content: center;
  align-items: center;

  &:hover {
    background: ${(props) => props.hoverColor};
  }
`;

const Button = ({ children, clickEvent, ...props }) => {
  return (
    <ButtonStyle onClick={clickEvent} {...props}>
      {children}
    </ButtonStyle>
  );
};

Button.defaultProps = {
  display: 'inline-flex',
  width: '60px',
  height: '60px',
  fontSize: '16px',
  color: '#fff',
  padding: 0,
  radius: '50%',
  bg: '#5a189a',
  hoverColor: '#2b1773',
  clickEvent: () => {},
};

export default Button;
