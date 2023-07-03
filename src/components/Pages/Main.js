import React from 'react';
import { useParams, useNavigate, useRef } from 'react-router-dom';
import Form from '../Form/Form';
import Gifs from '../Gifs/Gifs';
import api from '../../utils/api';
import NavBar from '../NavBar';

function Main({ searchGifs, setSearchGifs }) {
  const [pagination, setPagination] = React.useState(0);
  const [searchQuery, setSearchQuery] = React.useState('');
  const [isSubmitted, setIsSubmitted] = React.useState(false);

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
          console.error(error);
        });
      setIsSubmitted(false);
    }
  }, [searchQuery, isSubmitted]);

  React.useEffect(() => {
    api
      .getSearchGifs(searchQuery, page)
      .then(data => {
        setSearchGifs(data.data);
        setPagination(data.pagination);
      })
      .catch(error => {
        console.error(error);
      });
  }, [page]);

  function handleSubmit(e) {
    e.preventDefault();
    setSearchQuery(searchInputRef.current.value);
    setIsSubmitted(true);
  }

  function handleClear() {
    setSearchQuery('');
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

      {/*isSubmitted && (
        <p className="search-page-text">Ой... Здесь пока пусто. Найди гифки по поиску</p>
      )*/}

      {searchGifs.length !== 0 && <Gifs gifs={searchGifs} pagination={pagination} type="search" />}
    </>
  );
}

export default Main;
