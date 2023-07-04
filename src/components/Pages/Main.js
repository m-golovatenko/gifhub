import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Form from '../Form/Form';
import Gifs from '../Gifs/Gifs';
import api from '../../utils/api';
import NavBar from '../Elements/NavBar';
import SearchSuggestions from '../Elements/SearchSuggestions';
import Loader from '../Elements/Loader';

function Main({ searchGifs = [], setSearchGifs, setIsLoading, isLoading }) {
  const searchInputRef = React.useRef();
  let { page } = useParams();
  let { query } = useParams();
  const navigate = useNavigate();

  const [isShow, setIsShow] = React.useState(false);
  const [pagination, setPagination] = React.useState(0);
  const [searchQuery, setSearchQuery] = React.useState('');
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [isFailed, setIsFailed] = React.useState(false);

  React.useEffect(() => {
    if (isSubmitted) {
      setIsShow(false);
      navigate(`/search/${searchQuery}/1`, { replace: true });
    }
    // eslint-disable-next-line
  }, [searchQuery, isSubmitted]);

  React.useEffect(() => {
    if(page > 0) {
      setIsShow(false);
      setIsLoading(true);
      api
        .getSearchGifs(query, page)
        .then(data => {
          setSearchGifs(data.data);
          setPagination(data.pagination);
          setIsLoading(false);
          setIsShow(true);
          console.log('Меня меняет зависимость page');
        })
        .catch(error => {
          setIsFailed(true);
          console.error(error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
    // eslint-disable-next-line
  }, [page, query]);

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
        value={searchQuery}
        handleClear={handleClear}
        searchInputRef={searchInputRef}
      />

      {searchGifs.length === 0 && (
        <SearchSuggestions
          setSearchQuery={setSearchQuery}
          setIsSubmitted={setIsSubmitted}
          setIsFailed={setIsFailed}
        />
      )}

      <p className={searchGifs.length === 0 ? 'search-page-text' : 'search-page-text_none'}>
        {isFailed
          ? 'Ой, что-то не так (×_×) '
          : 'Здесь пока пусто. Найди гифки по поиску (.❛ ᴗ ❛.) '}
      </p>

      {isLoading ? (
        <Loader />
      ) : (
        isShow && <Gifs gifs={searchGifs} pagination={pagination} type="search" setIsShow={setIsShow} />
      )}

    </>
  );
}

export default Main;
