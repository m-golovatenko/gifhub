import React from 'react';

function Input({ placeholder, value, searchInputRef, validate, searchQuery }) {
  React.useEffect(() => {
    validate(value);
    // eslint-disable-next-line
  }, [value]);

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
