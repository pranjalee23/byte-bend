import { Link } from 'react-router-dom';
import BrandLogo from '../../../assets/logo.svg?react';
import Button from '../../ui/Button';

const Navbar = ({toggleTheme}) => {
  return (
    <>
      <nav>
        <Link className='nav-brand-wrapper' to='/'>
          <div className='nav-logo'>
            <BrandLogo width={32} height={32} />
          </div>
          <div className='nav-title'>
            Byte<span>Bend</span>
          </div>
        </Link>
        <div className='nav-right-wrapper'>
          <div className='nav-link-wrapper'>
            <Link className='nav-link-item' to='/'>
              Home
            </Link>
            <Link className='nav-link-item' to='/'>
              About
            </Link>
            <Link className='nav-link-item' to='/'>
              Text Manipulation
            </Link>
          </div>
          <div className='nav-toggle-mode'>
            <Button title='Dark mode' onClick={toggleTheme} />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
