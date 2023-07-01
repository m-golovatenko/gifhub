import React from 'react';
import gif from '../images/gifs__image.png';

function Main() {
  return (
    <div className="container">
      <form className="search">
        <input className="search__bar" placeholder="Поле поиска" />
        <button className="search__clear" />
        <button className="search__submit" />
      </form>
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

      <div className="pages">
        <button className="pages__button">Назад</button>
        <ul className="pages__list">
          <li className="pages__item">
            <a>1</a>
          </li>
          <li className="pages__item">
            <a>2</a>
          </li>
          <li className="pages__item">
            <a>3</a>
          </li>
          <li className="pages__item">
            <a>4</a>
          </li>
          <li className="pages__item">
            <a>5</a>
          </li>
          <li className="pages__item">
            <a>6</a>
          </li>
          <li className="pages__item">
            <a>7</a>
          </li>
          <li className="pages__item">
            <a>8</a>
          </li>
          <li>
            <p className="pages__item-text">...</p>
          </li>
          <li className="pages__item">
            <a>15</a>
          </li>
        </ul>
        <button className="pages__button">Вперед</button>
      </div>
    </div>
  );
}

export default Main;
