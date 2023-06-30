import React from 'react';

function Main() {
  return (
    <div className="container">
      <form className="search">
        <input className="search__bar" placeholder="Поле поиска" />
        <button className="search__clear" />
        <button className="search__submit" />
      </form>
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
      <div className="pages">
        <a className="pages__item">Назад</a>
        <a className="pages__item">1</a>
        <a className="pages__item">2</a>
        <a className="pages__item">3</a>
        <a className="pages__item">4</a>
        <a className="pages__item">5</a>
        <a className="pages__item">6</a>
        <a className="pages__item">7</a>
        <a className="pages__item">8</a>
        <a className="pages__item">Вперед</a>
      </div>
    </div>
  );
}

export default Main;
