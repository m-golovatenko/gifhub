import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <a className="header__logo" href="#" aria-label="Логотип сайта." />
      <nav>
        <ul className="header__nav">
          <li>
            <NavLink
              to="/search"
              className={({ isActive }) =>
                isActive ? ' header__link header__link_active' : 'header__link'
              }
            >
              Поиск
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/trending/1"
              className={({ isActive }) =>
                isActive ? ' header__link header__link_active' : 'header__link'
              }
            >
              Тренды
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/random-gif"
              className={({ isActive }) =>
                isActive ? ' header__link header__link_active' : 'header__link'
              }
            >
              Случайный гиф
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
