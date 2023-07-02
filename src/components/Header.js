import React from 'react';
import { Link  } from 'react-router-dom';

function Header() {
  

  return (
    <header className="header">
      <a className="header__logo" href="#" aria-label="Логотип сайта." />
      <nav>
        <ul className="header__nav">
          <li>
            <a href="/search" className="header__link">Поиск</a>
          </li>
          <li>
            <a href="/trending/1" className="header__link">Тренды</a>
          </li>
          <li>
            <a href="/random-gif" className="header__link">Случайный гиф</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
