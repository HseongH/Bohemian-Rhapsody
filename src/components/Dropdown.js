import React, { useRef, useState } from 'react';
import styled from 'styled-components';

// ELEMENTS
import { Button } from '../elements/index';

// ICON
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

const DropDownStyle = styled.ul`
  width: 110px;
  position: absolute;
  top: 48px;
  left: 0;
  border-radius: 10px;
  padding: 10px 0;
  box-sizing: border-box;
  background: #fff;
  line-height: 2;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  z-index: 9;

  li {
    cursor: pointer;
    padding: 0 15px;
    box-sizing: border-box;

    &:hover {
      background: #eee;
    }
  }
`;

const Dropdown = (props) => {
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen((preOpen) => !preOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) return;

    setOpen(false);
  };

  return (
    <>
      <Button
        clickEvent={handleToggle}
        width="40px"
        height="40px"
        bg="#fff"
        hoverColor="#EFEFEF"
        color="inherit"
        fontSize="22px"
      >
        <MoreHorizIcon ref={anchorRef} />
      </Button>

      {open && (
        <ClickAwayListener onClickAway={handleClose}>
          <DropDownStyle>
            {props.contents.map((content, idx) => {
              return (
                <li
                  onClick={() => {
                    props.clickEvent[idx]();
                  }}
                >
                  {content}
                </li>
              );
            })}
          </DropDownStyle>
        </ClickAwayListener>
      )}
    </>
  );
};

Dropdown.defaultProps = {};

export default Dropdown;
