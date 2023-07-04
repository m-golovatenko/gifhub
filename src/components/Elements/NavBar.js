import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <ul className="nav">
        <li>
          <NavLink
            to="/search"
            className={({ isActive }) => (isActive ? ' nav__link nav__link_active' : 'nav__link')}
          >
            Поиск
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/trending/1"
            className={({ isActive }) => (isActive ? ' nav__link nav__link_active' : 'nav__link')}
          >
            Тренды
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/random-gif"
            className={({ isActive }) => (isActive ? ' nav__link nav__link_active' : 'nav__link')}
          >
            Случайный гиф
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
