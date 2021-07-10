// LIBRARY
import React from 'react';
import styled, { css } from 'styled-components';

const ButtonStyle = styled.button`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  color: ${(props) => props.color};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  border-radius: ${(props) => props.radius};
  font-size: ${(props) => props.fontSize};
  box-sizing: border-box;
  border: none;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;

  ${(props) => {
    const selected = props.theme.palette.mainColor;
    return css`
      background: ${selected};
      &:hover {
        background: ${(props) => props.hoverColor};
      }
    `;
  }};
`;

const Button = ({ children, clickEvent, ...props }) => {
  return (
    <ButtonStyle onClick={clickEvent} {...props}>
      {children}
    </ButtonStyle>
  );
};

Button.defaultProps = {
  width: '60px',
  height: '60px',
  fontSize: '16px',
  color: '#fff',
  padding: 0,
  radius: '50%',
  hoverColor: '#a336cc',
  clickEvent: () => {},
};

export default Button;
