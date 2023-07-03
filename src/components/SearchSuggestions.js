import React from 'react';
import api from '../../utils/api';

function SearchSuggestions({ setSuggestions, suggestions, setSearchQuery, setIsSubmitted }) {
  React.useEffect(() => {
    api
      .getSuggestions()
      .then(data => {
        setSuggestions(data.data);
      })
      .then(() => {})
      .catch(e => console.error(e));
  }, [setSuggestions]);

  function handleClick({ target: { value } }) {
    setSearchQuery(value);
    setIsSubmitted(true);
  }

  return (
    <div className="suggestions">
      {suggestions.map((suggestion, i) => (
        <button
          className="suggestions__item"
          onClick={handleClick}
          key={suggestions[i]}
          value={suggestion}
        >
          {suggestion}
        </button>
      ))}
    </div>
  );
}

export default SearchSuggestions;
