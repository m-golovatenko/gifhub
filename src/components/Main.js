import React from 'react';
import Pagination from './Pagination';

function Main({ isSearchActive }) {
  return (
    <div className="container">

      { isSearchActive && <form className="search">
        <input className="search__bar" placeholder="Поле поиска" />
        <button className="search__clear" />
        <button className="search__submit" />
      </form> }

      <div className="gifs">
        <div className="gifs__item"></div>
        <div className="gifs__item"></div>
        <div className="gifs__item"></div>
        <div className="gifs__item"></div>
        <div className="gifs__item"></div>
        <div className="gifs__item"></div>
        <div className="gifs__item"></div>
        <div className="gifs__item"></div>
        <div className="gifs__item"></div>
      </div>

      <Pagination />
    </div>
  );
}

export default Main;
