import React from 'react';
import { useParams  } from 'react-router-dom';
import Gifs from './Gifs';
import api from '../utils/api';

function Trending() {
  const [trendingGifs, setTrendingGifs] = React.useState([]);
  let { page } = useParams();

  React.useEffect(() => {
    api
      .getTrendingGifs(page)
      .then(data => {
        setTrendingGifs(data.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <Gifs gifs={trendingGifs} />
  );
}

export default Trending;
