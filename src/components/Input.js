import React from 'react';

function Input({ placeholder, handleChange, value }) {
  return (
    <input
      className="search__bar"
      placeholder={placeholder}
      type="text"
      onChange={e => {
        handleChange(e.target.value);
      }}
      value={value || ''}
    />
  );
}

export default Input;
