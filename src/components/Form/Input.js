import React from 'react';

function Input({ placeholder, value, searchInputRef }) {
  const [searchQuery, setSearchQuery] = React.useState('');

  React.useEffect(() => {
    setSearchQuery(value);
  }, [value])

  return (
    <input
      ref={searchInputRef}
      className="search__bar"
      placeholder={placeholder}
      type="text"
      value={searchQuery}
      onChange={e=>setSearchQuery(e.target.value)}
    />
  );
}

export default Input;
