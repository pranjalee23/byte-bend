import React from 'react';

const Button = ({ title, onClick }) => {
  return (
    <>
      <button className='custom-button-primary' type='button' onClick={onClick}>{title}</button>
    </>
  );
};

export default Button;
