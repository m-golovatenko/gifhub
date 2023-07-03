import React from 'react';
import Input from './Input';

function Form({ searchQuery, handleSubmit, handleClear, searchInputRef }) {
  return (
    <form className="search" onSubmit={handleSubmit}>
      <Input
        placeholder={'Пора искать гифки...'}
        searchInputRef={searchInputRef}
        value={searchQuery}
      />

      {searchQuery && <button className="search__clear" onClick={handleClear} type="reset" />}
      <button
        className="search__submit"
        type="submit"
        onClick={handleSubmit}
        /*disabled={searchQuery.length === 0}*/
      />
    </form>
  );
}

export default Form;
