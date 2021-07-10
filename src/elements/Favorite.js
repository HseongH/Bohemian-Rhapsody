// LIBRARY
import React, { useState } from 'react';

// ELEMENT
import { Button } from './index';

const Favorite = (props) => {
  console.log(props.palette);
  const [text, setText] = useState('저장');
  const [bg, setBg] = useState('#A336A3');

  return (
    <Button width="auto" height="auto" padding="10px 12px" radius="20px" bg={bg}>
      {text}
    </Button>
  );
};

Favorite.defaultProps = {};

export default Favorite;
