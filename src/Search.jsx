import React from 'react';

function Search({ searchTerm, onSearch }) {
  return (
    <div className="search">
      <label htmlFor="search">Search stories: </label>
      <input
        id="search"
        type="text"
        value={searchTerm}
        onChange={onSearch}
        placeholder="Search by title..."
      />
    </div>
  );
}

export default Search;