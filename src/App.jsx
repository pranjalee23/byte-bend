import { useState } from 'react';
import './app.scss';
import Header from './components/global/header/Header';
import TextArea from './components/ui/TextArea';
import Button from './components/ui/Button';
// import { handleOnChange, handleUpClick } from './utils/TextTransform.mjs';

function App() {
  const [inputText, setInputText] = useState('');

  const handleOnChange = (event) => {
    setInputText(event.target.value);
  };

  const handleUpperClick = () => {
    setInputText(inputText.toUpperCase());
  };

  const handleLowerClick = () => {
    setInputText(inputText.toLowerCase());
  };

  const handleClear = () => {
    setInputText('');
  };

  return (
    <>
      <Header />
      <div className='main-body-wrapper'>
        <TextArea value={inputText} onChange={handleOnChange} />
        <div className='button-wrapper'>
          <Button title='Convert to Uppercase' onClick={handleUpperClick} />
          <Button title='Convert to Lowercase' onClick={handleLowerClick} />
          <Button title='Clear Text' onClick={handleClear} />
        </div>
      </div>
    </>
  );
}

export default App;
