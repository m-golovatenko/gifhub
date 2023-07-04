import React from 'react';
import { Link } from 'react-router-dom';

function Header({ darkTheme, handleClick }) {
  return (
    <header className="header">
      <Link to="/search" className={'header__logo'} aria-label="Логотип сайта." />
      <button
        className={
          darkTheme
            ? 'header__button-theme header__button-theme_light'
            : 'header__button-theme header__button-theme_dark'
        }
        onClick={handleClick}
      />
    </header>
  );
}

export default Header;
