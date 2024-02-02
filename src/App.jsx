import { useState } from 'react';
import './app.scss';
import Header from './components/global/header/Header';
import TextArea from './components/ui/TextArea';
import Button from './components/ui/Button';
// import { handleOnChange, handleUpClick } from './utils/TextTransform.mjs';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

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
      <div className={`main-body-outer-wrapper ${theme}`}>
        <Header theme={theme} toggleTheme={toggleTheme} />
        <div className='main-body-inner-wrapper'>
          <TextArea value={inputText} onChange={handleOnChange} />
          <div className='button-wrapper'>
            <Button title='Convert to Uppercase' onClick={handleUpperClick} />
            <Button title='Convert to Lowercase' onClick={handleLowerClick} />
            <Button title='Clear Text' onClick={handleClear} />
          </div>
          <div>
            <b>Text Summary: </b>&nbsp;&nbsp;
            {inputText.split(' ').filter((value) => value !== '').length} words and {inputText.length} characters.
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
