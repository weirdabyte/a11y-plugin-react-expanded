import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <section className='nav-section'>
      <img className='logo' src='./images/logo.png' alt='logo'></img>
      <nav className='nav'>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/About'>About</Link>
          </li>
          <li>
            <Link to='/Contact'>Contact</Link>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Header;
