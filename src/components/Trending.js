import React from 'react';
import Pagination from './Pagination';
import Gif from './Gif';
import api from '../utils/api';

function Trending() {
  const [trendingGifs, setTrendingGifs] = React.useState([]);

  React.useEffect(() => {
    api
      .getTrendingGifs()
      .then(data => {
        setTrendingGifs(data.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <div className="gifs">
        {trendingGifs.map(gif => (
          <Gif key={gif.id} gifUrl={gif.images.original.url} title={gif.title} />
        ))}
      </div>
      <Pagination />
    </>
  );
}

export default Trending;
