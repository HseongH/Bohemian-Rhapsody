// LIBRARY
import React, { useState } from 'react';
import styled from 'styled-components';

const InputStyle = styled.input`
  --lightcolor: #6c757d;

  width: ${(props) => props.width};
  background: ${(props) => props.bg};
  padding: ${(props) => props.padding};
  border-radius: ${(props) => props.radius};
  font-size: ${(props) => props.fontSize};
  border: 1px solid #ccc;
  box-sizing: border-box;

  &:focus {
    box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 3px;
    outline: none;
    border: none;
  }

  &::placeholder {
    color: var(--lightcolor);
  }

  &::-webkit-input-placeholder {
    color: var(--lightcolor);
  }

  &:-ms-input-placeholder {
    color: var(--lightcolor);
  }
`;

const Input = ({ placeholder, type, value, changeEvent, ...props }) => {
  const changeValue = (event) => {
    setText(event.target.value);
    changeEvent();
  };

  const [text, setText] = useState(value || '');

  return (
    <InputStyle
      {...props}
      placeholder={placeholder}
      type={type}
      value={text}
      onChange={changeValue}
    />
  );
};

Input.defaultProps = {
  width: '100%',
  bg: '#fff',
  padding: '8px 12px',
  radius: '20px',
  fontSize: '16px',
  type: 'text',
  changeEvent: () => {},
  placeholder: '텍스트를 입력해주세요',
};

export default Input;
