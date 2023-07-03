import React from 'react';
import { useParams } from 'react-router-dom';
import Gifs from '../Gifs/Gifs';
import api from '../../utils/api';
import NavBar from '../NavBar';

function Trending({ trendingGifs, setTrendingGifs, path }) {
  const [pagination, setPagination] = React.useState(0);
  let { page } = useParams();

  React.useEffect(() => {
    api
      .getTrendingGifs(page)
      .then(data => {
        setTrendingGifs(data.data);
        setPagination(data.pagination);
      })
      .catch(error => {
        console.error(error);
        console.log('here');
      });
  }, [page]);

  return (
    <>
      <NavBar />
      <Gifs gifs={trendingGifs} pagination={pagination} type="trending" />
    </>
  );
}

export default Trending;
