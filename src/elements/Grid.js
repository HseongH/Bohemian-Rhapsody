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
    ${(props) => (props.shadow ? `box-shadow: 5px 9px 15px grey; ` : '')}
    ${(props) => (props.radius ? `border-radius: ${props.radius};` : '')}
    box-sizing: border-box;
  over-flow: hidden;
`;

export default Grid;
