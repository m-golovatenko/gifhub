import React from 'react';
import { useParams } from 'react-router-dom';
import Gifs from '../Gifs/Gifs';
import api from '../../utils/api';
import NavBar from '../NavBar';
import Loader from '../Loader';

function Trending({ trendingGifs, setTrendingGifs, setIsLoading, isLoading }) {
  const [pagination, setPagination] = React.useState(0);
  let { page } = useParams();

  React.useEffect(() => {
    setIsLoading(true);
    api
      .getTrendingGifs(page)
      .then(data => {
        setTrendingGifs(data.data);
        setPagination(data.pagination);
        setIsLoading(false);
      })
      .catch(error => {
        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [page, setIsLoading, setTrendingGifs]);

  return (
    <>
      <NavBar />
      {isLoading ? (
        <Loader />
      ) : (
        <Gifs gifs={trendingGifs} pagination={pagination} type="trending" />
      )}
    </>
  );
}

export default Trending;
