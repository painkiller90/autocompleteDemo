import React from 'react';
import './inputSearch.css';

export const InputSearch = ({ placeholder, handleSearch, ariaControlId }) => {
  return (
    <>
      <input
        id='input-search'
        placeholder={placeholder}
        onChange={handleSearch}
        type='search'
        aria-autocomplete='list'
        aria-controls={ariaControlId}
        aria-activedescendant=''
      />
    </>
  );
};
