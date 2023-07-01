import React from 'react';

function Header() {
  

  return (
    <div className="header">
      <a className="header__logo" href="/" aria-label="Логотип сайта." />
      <nav>
        <ul className="header__nav">
          <li>
            <a href="/search" className="header__link">Поиск</a>
          </li>
          <li>
            <a href="/gifs" className="header__link">Тренды</a>
          </li>
          <li>
            <a href="/random-gif" className="header__link">Случайный гиф</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
