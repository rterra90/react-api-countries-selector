import React from 'react';

const useFormatValues = (props) => {
  let finalValue = '';
  if (typeof props[0] == 'undefined') {
    /* objeto */
    console.log('obj');
  } else {
    /* array */
    console.log('array');
  }
  return <span>useFormatValues</span>;
};

export default useFormatValues;
