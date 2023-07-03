import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Form from '../Form/Form';
import Gifs from '../Gifs/Gifs';
import api from '../../utils/api';
import NavBar from '../Elements/NavBar';

function Main({ searchGifs, setSearchGifs }) {
  const [pagination, setPagination] = React.useState(0);
  const [searchQuery, setSearchQuery] = React.useState('');
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [isFailed, setIsFailed] = React.useState(false);

  const searchInputRef = React.useRef();
  let { page } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (isSubmitted) {
      navigate('/search/1', { replace: true });
      api
        .getSearchGifs(searchQuery, page)
        .then(data => {
          setSearchGifs(data.data);
          setPagination(data.pagination);
        })
        .catch(error => {
          setIsFailed(true);
          console.error(error);
        });
      setIsSubmitted(false);
    }
    // eslint-disable-next-line
  }, [searchQuery, isSubmitted]);

  React.useEffect(() => {
    api
      .getSearchGifs(searchQuery, page)
      .then(data => {
        setSearchGifs(data.data);
        setPagination(data.pagination);
      })
      .catch(error => {
        setIsFailed(true);
        console.error(error);
      });
    // eslint-disable-next-line
  }, [page]);

  function handleSubmit(e) {
    e.preventDefault();
    setSearchQuery(searchInputRef.current.value);
    setIsSubmitted(true);
  }

  function handleClear() {
    setSearchQuery('');
    setIsFailed(false);
    searchInputRef.current.focus();
  }

  return (
    <>
      <NavBar />

      <Form
        handleSubmit={handleSubmit}
        searchQuery={searchQuery}
        handleClear={handleClear}
        searchInputRef={searchInputRef}
      />

      <p className={searchGifs.length === 0 ? 'search-page-text' : 'search-page-text_none'}>
        {isFailed
          ? 'Ой, что-то не так (×_×) '
          : 'Здесь пока пусто. Найди гифки по поиску (.❛ ᴗ ❛.) '}
      </p>

      {searchGifs.length !== 0 && <Gifs gifs={searchGifs} pagination={pagination} type="search" />}
    </>
  );
}

export default Main;
