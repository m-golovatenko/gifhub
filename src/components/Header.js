import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';

function Header() {
  return (
    <header className="header">
      <Link to="/search/1" className="header__logo" aria-label="Логотип сайта." />

      <NavBar />
    </header>
  );
}

export default Header;
