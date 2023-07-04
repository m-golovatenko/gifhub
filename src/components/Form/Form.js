import React from 'react';
import Input from './Input';

function Form({ value, handleSubmit, handleClear, searchInputRef }) {
  const [searchQuery, setSearchQuery] = React.useState('');

  function validate(value) {
    setSearchQuery(value.substr(0, Math.min(value.length, 50)));
  }

  return (
    <form className="search" onSubmit={handleSubmit}>
      <Input 
        placeholder={'Найти GIF...'} 
        searchInputRef={searchInputRef} 
        value={value} 
        validate={validate}
        searchQuery={searchQuery} 
      />

      {searchQuery && <button className="search__clear" onClick={handleClear} type="reset" />}
      <button 
        className="search__submit" 
        type="submit" 
        onClick={handleSubmit}
        disabled={!searchQuery && !value} 
      />
    </form>
  );
}

export default Form;
