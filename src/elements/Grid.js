import React from 'react';
import styled from 'styled-components';

const Grid = ({ children, _onClick, ...props }) => {
  return (
    <React.Fragment>
      <GridBox {...props} onClick={_onClick}>
        {children}
      </GridBox>
    </React.Fragment>
  );
};

Grid.defaultProps = {
  children: null,
  is_flex: false,
  width: '100%',
  padding: false,
  margin: false,
  align: false,
  bg: false,
  _onClick: () => {},
  shadow: false,
};

const GridBox = styled.div`
  ${(props) =>
    props.is_flex ? `display: flex; align-iems: center; justify-content: ${props.is_flex};` : ''}
  width: ${(props) => props.width};
  height: 100%;
  ${(props) => (props.padding ? `padding: ${props.padding};` : '')}
  ${(props) => (props.margin ? `margin: ${props.margin};` : '')}
    ${(props) => (props.align ? `text-align: ${props.align};` : '')}
    ${(props) => (props.bg ? `background-color: ${props.bg};` : '')}
    ${(props) => (props.shadow ? `box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;` : '')}
    ${(props) => (props.radius ? `border-radius: ${props.radius};` : '')}
    box-sizing: border-box;
  overflow: hidden;
  &:hover {
    background: ${(props) => props.hoverColor};
    ${(props) => (props.hoverShadow ? `box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;` : '')}
  }
`;

export default Grid;
