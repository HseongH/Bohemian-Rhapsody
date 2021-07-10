// LIBRARY
import React from 'react';
import { useSelector } from 'react-redux';

// PAGES
import Write from './Write';

const Modify = (props) => {
  const post = useSelector((state) => state);

  return <Write />;
};

Modify.defaultProps = {};

export default Modify;
