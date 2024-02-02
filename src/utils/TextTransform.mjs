// import { useState } from 'react';

// export const [inputText, setInputText] = useState('');

export const handleOnChange = (event) => {
  setInputText(event.target.value);
};

export const handleUpClick = () => {
  setInputText(inputText.toUpperCase());
  console.log('uppercase');
};
