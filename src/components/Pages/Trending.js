import React from 'react';
import { useParams } from 'react-router-dom';
import Gifs from '../Gifs/Gifs';
import api from '../../utils/api';
import NavBar from '../Elements/NavBar';
import Loader from '../Elements/Loader';

function Trending({ trendingGifs, setTrendingGifs, setIsLoading, isLoading }) {
  const [pagination, setPagination] = React.useState(0);
  const [isShow, setIsShow] = React.useState(false);
  let { page } = useParams();
  
  React.useEffect(() => {
    setIsLoading(true);
    api
      .getTrendingGifs(page)
      .then(data => {
        setTrendingGifs(data.data);
        setPagination(data.pagination);
        setIsLoading(false);
        setIsShow(true);
      })
      .catch(error => {
        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
    // eslint-disable-next-line
  }, [page]);

  return (
    <>
      <NavBar />
      {isLoading ? (
        <Loader />
      ) : (
        isShow && <Gifs gifs={trendingGifs} pagination={pagination} type="trending" setIsShow={setIsShow} />
      )}
    </>
  );
}

export default Trending;
