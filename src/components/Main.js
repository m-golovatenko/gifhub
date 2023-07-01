import React from 'react';
import Pagination from './Pagination';
import gif from '../images/gifs__image.png';

function Main({ isSearchActive }) {
  return (
    <div className="container">
      {isSearchActive && (
        <form className="search">
          <input className="search__bar" placeholder="Поле поиска" />
          <button className="search__clear" />
          <button className="search__submit" />
        </form>
      )}

      <div className="gifs">
        <figure className="gifs__item">
          <img className="gifs__image" src={gif} alt="" />
          <figcaption className="gifs__title">123</figcaption>
        </figure>

        <figure className="gifs__item">
          <img className="gifs__image" src={gif} alt="" />
          <figcaption className="gifs__title">123</figcaption>
        </figure>

        <figure className="gifs__item">
          <img className="gifs__image" src={gif} alt="" />
          <figcaption className="gifs__title">123</figcaption>
        </figure>

        <figure className="gifs__item">
          <img className="gifs__image" src={gif} alt="" />
          <figcaption className="gifs__title">123</figcaption>
        </figure>

        <figure className="gifs__item">
          <img className="gifs__image" src={gif} alt="" />
          <figcaption className="gifs__title">123</figcaption>
        </figure>
        <figure className="gifs__item">
          <img className="gifs__image" src={gif} alt="" />
          <figcaption className="gifs__title">123</figcaption>
        </figure>
        <figure className="gifs__item">
          <img className="gifs__image" src={gif} alt="" />
          <figcaption className="gifs__title">123</figcaption>
        </figure>
        <figure className="gifs__item">
          <img className="gifs__image" src={gif} alt="" />
          <figcaption className="gifs__title">123</figcaption>
        </figure>
        <figure className="gifs__item">
          <img className="gifs__image" src={gif} alt="" />
          <figcaption className="gifs__title">123</figcaption>
        </figure>
      </div>

      <Pagination />
    </div>
  );
}

export default Main;
