import React from 'react';

const Button = ({ title, onClick, style }) => {
  return (
    <>
      <button className='custom-button-primary' type='button' onClick={onClick} style={style}>
        {title}
      </button>
    </>
  );
};

export default Button;
