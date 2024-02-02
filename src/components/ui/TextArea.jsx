import { useState } from 'react';
import Button from './Button';
import { handleUpClick } from '../../utils/TextTransform.mjs';

const TextArea = ({ value, onChange }) => {
  const [disabled, setDisabled] = useState(false);

  return (
    <>
      <textarea className='input-textarea' placeholder='Enter text to analyze' value={value} onChange={onChange} cols={60} rows={10}></textarea>
    </>
  );
};

export default TextArea;
