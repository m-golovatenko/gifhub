import React from 'react';
import Form from './Form';
import Gifs from './Gifs';
import api from '../utils/api';

function Main() {
  const [searchGifs, setSearchGifs] = React.useState([]);
  const [searchQuery, setSearchQuery] = React.useState('');
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  React.useEffect(() => {
    if (isSubmitted) {
      api
        .getSearchGifs(searchQuery)
        .then(data => {
          setSearchGifs(data.data);
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

      {searchGifs.length !== 0 && <Gifs gifs={searchGifs} /> }

    </div>
  );
}

export default Main;
