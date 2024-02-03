import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Header = ({theme, toggleTheme}) => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY > 2);
    });
  }, []);

  return (
    <>
      <header className={`${scroll ? 'header-scrolled' : 'header-normal'} ${theme}`}>
        <div className='header-wrapper'>
          <Navbar theme={theme} toggleTheme={toggleTheme} />
        </div>
      </header>
      <Outlet />
    </>
  );
};

export default Header;
