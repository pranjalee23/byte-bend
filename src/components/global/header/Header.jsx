import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Header = () => {
  const [scroll, setScroll] = useState(false);

  

  return (
    <>
      <header>
        <div className='header-wrapper'>
          <Navbar />
        </div>
      </header>
      <Outlet />
    </>
  );
};

export default Header;
