import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <Link to="/search" className="header__logo" aria-label="Логотип сайта." />
    </header>
  );
}

export default Header;
