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

  const handleCapitalClick = () => {
    setInputText(
      inputText
        .toLowerCase()
        .split(' ')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
    );
  };

  const handleInvertClick = () => {
    setInputText(
      inputText
        .toUpperCase()
        .split(' ')
        .map((word) => word.charAt(0).toLowerCase() + word.slice(1))
        .join(' ')
    );
  };

  const handleSentenceClick = () => {
    setInputText(
      inputText
        .toLowerCase()
        .split('. ')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join('. ')
    );
  };

  const handleCopyClick = () => {
    // let text = document.getElementById('inputTextArea');
    // text.select();
    navigator.clipboard.writeText(inputText);
    // document.getSelection().removeAllRanges();
  };

  const handleClear = () => {
    setInputText('');
  };

  return (
    <>
      <div className={`main-body-outer-wrapper ${theme}`}>
        <Header theme={theme} toggleTheme={toggleTheme} />
        <div className='main-body-inner-wrapper'>
          <TextArea id='inputTextArea' value={inputText} onChange={handleOnChange} />
          <div className='button-wrapper'>
            <Button title='Convert to Uppercase' onClick={handleUpperClick} />
            <Button title='Convert to Lowercase' onClick={handleLowerClick} />
            <Button title='Convert to Capital Case' onClick={handleCapitalClick} />
            <Button title='Convert to Invert Case' onClick={handleInvertClick} />
            <Button title='Convert to Sentence Case' onClick={handleSentenceClick} />
            <Button title='Copy to Clipboard' onClick={handleCopyClick} />
            <Button title='Remove Extra Spaces' onClick={handleCopyClick} />
            <Button title='Clear Text' onClick={handleClear} />
          </div>
          <div>
            <b>Text Summary: </b>&nbsp;&nbsp;
            {inputText.split(/\s+/).filter((element) => element.length !== 0).length} words and {inputText.length} characters.
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
