import React from 'react';
import Pagination from './Pagination';
import Gif from './Gif';
import Form from './Form';
import api from '../utils/api';

function Main() {
  const [searchGifs, setTrendingGifs] = React.useState([]);
  const [searchQuery, setSearchQuery] = React.useState('');
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  React.useEffect(() => {
    if (isSubmitted) {
      api.getSearchGifs(searchQuery).then(data => {
        setTrendingGifs(data.data);
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

      <div className="gifs">
        {searchGifs.map(gif => (
          <Gif key={gif.id} gifUrl={gif.images.original.url} title={gif.title} />
        ))}
      </div>
      <Pagination />
    </div>
  );
}

export default Main;
