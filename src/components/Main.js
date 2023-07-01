import React from 'react';
import Pagination from './Pagination';
import Gif from './Gif';

function Main({ gifs }) {
  console.log(gifs);

  return (
    <div className="container">
      <form className="search">
        <input className="search__bar" placeholder="Поле поиска" />
        <button className="search__clear" />
        <button className="search__submit" />
      </form>

      <div className="gifs">
        {gifs.map(gif => (
          <Gif key={gif.id} gifUrl={gif.images.original.url} title={gif.title} />
        ))}
      </div>
      <Pagination />
    </div>
  );
}

export default Main;
