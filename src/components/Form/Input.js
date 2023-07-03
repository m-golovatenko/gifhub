import React from 'react';

function Input({ placeholder, value, searchInputRef }) {
  const [searchQuery, setSearchQuery] = React.useState('');

  React.useEffect(() => {
    setSearchQuery(value);
  }, [value]);

  function validate(value) {
    if (value.length > 50) return;
    return setSearchQuery(value);
  }

  return (
    <input
      ref={searchInputRef}
      className="search__bar"
      placeholder={placeholder}
      type="text"
      value={searchQuery}
      onChange={e => validate(e.target.value)}
    />
  );
}

export default Input;
