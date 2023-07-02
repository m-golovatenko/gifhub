import React from 'react';
import { useParams } from 'react-router-dom';
import Form from '../Form/Form';
import Gifs from '../Gifs/Gifs';
import api from '../../utils/api';

function Main() {
  const [searchGifs, setSearchGifs] = React.useState([]);
  const [pagination, setPagination] = React.useState(0);
  const [searchQuery, setSearchQuery] = React.useState('');
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  let { page } = useParams();

  React.useEffect(() => {
    if (isSubmitted) {
      api
        .getSearchGifs(searchQuery, page)
        .then(data => {
          setSearchGifs(data.data);
          setPagination(data.pagination);
        })
        .catch(error => {
          console.error(error);
        });
      setSearchQuery('');
      setIsSubmitted(false);
    }
  }, [searchQuery, isSubmitted]);

  function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitted(true);
  }

  function handleClear() {
    setSearchQuery('');
  }

  return (
    <div className="container">
      <Form
        handleSubmit={handleSubmit}
        handleChange={setSearchQuery}
        searchQuery={searchQuery}
        handleClear={handleClear}
      />

      {searchGifs.length !== 0 && <Gifs gifs={searchGifs} pagination={pagination} />}
    </div>
  );
}

export default Main;
