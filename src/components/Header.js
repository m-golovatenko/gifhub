import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <Link to="/search/1" className="header__logo" aria-label="Логотип сайта." />
    </header>
  );
}

export default Header;
