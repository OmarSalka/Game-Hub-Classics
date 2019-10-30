import React from 'react';

const Box = ({ id, icon, user }) => {
  return (
    // <div className='box one box-full'>
    <div className={`box box-${id}`}>
      <i className='fas fa-times fa-4x'></i>
    </div>
  );
};

export default Box;
