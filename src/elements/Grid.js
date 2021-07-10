import React from 'react';
import styled from 'styled-components';

const Grid = (props) => {
    const { is_flex, shadow, width, margin, padding, bg, align, children, _onClick } = props;

    const styles = {
        is_flex: is_flex,
        shadow: shadow,
        width: width,
        margin: margin,
        padding: padding,
        bg: bg,
        align: align
    };
    return (
        <React.Fragment>
            <GridBox {...styles} onClick={_onClick} >{children}</GridBox>
        </React.Fragment>
    )
}

Grid.defaultProps = {
    children: null,
    is_flex: false,
    width: "100%",
    padding: false,
    margin: false,
    align: false,
    bg: false,
    _onClick: () => { },
    shadow: false
}

const GridBox = styled.div`
    ${(props) => (props.is_flex ? `display: flex; align-iems: cener; justify-content: space-between; ` : '')}
    width: ${(props) => props.width};
    height: 100%;
    ${(props) => (props.padding ? `padding: ${props.padding};` : '')}
    ${(props) => (props.margin ? `margin: ${props.margin};` : '')}
    ${(props) => (props.align ? `text-align: ${props.align};` : '')}
    ${(props) => (props.bg ? `background-color: ${props.bg};` : '')}
    ${(props) => (props.shadow ? `box-shadow: 5px 9px 15px grey; ` : '')}
    box-sizing: border-box;
`;

export default Grid
