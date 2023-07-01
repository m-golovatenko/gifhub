import React from 'react';
import Pagination from './Pagination';
import Gif from './Gif';

function Trending({ gifs }) {
  console.log(gifs);

  return (
    <div className="container">
      <div className="gifs">
        {gifs.map(gif => (
          <Gif key={gif.id} gifUrl={gif.images.original.url} title={gif.title} />
        ))}
      </div>

      <Pagination />
    </div>
  );
}

export default Trending;
