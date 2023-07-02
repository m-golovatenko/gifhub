import React from 'react';
import Input from './Input';

function Form({ searchQuery, handleSubmit, handleChange, handleClear }) {
  return (
    <form className="search" onSubmit={handleSubmit}>
      <Input placeholder={'Найти GIF...'} handleChange={handleChange} value={searchQuery} />

      {searchQuery && <button className="search__clear" onClick={handleClear} type="reset" />}
      <button className="search__submit" type="submit" onClick={handleSubmit} />
    </form>
  );
}

export default Form;
