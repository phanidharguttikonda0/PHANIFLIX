import React, { useState } from 'react';
import css from './SearchBar.module.css';

function SearchBar(props) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchTerm);
    async function main() {
        const res = await fetch(` https://api.themoviedb.org/3/search/movie?api_key=38ee7b5f33ca8d57d0c93c66fb8fcac4&query="${searchTerm}"`) ;
        const data = await res.json() ;
        props.setItems(data.results)
    }
    main() ;
  };

  return (
    <div className={css.bar}>
        <form className={css.form} onSubmit={handleSearch}>
      <input
        className={css.searchbar}
        type="search"
        placeholder="Search"
        aria-label="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button className={css.button} type="submit">
        Search
      </button>
    </form>
    </div>
  );
}

export default SearchBar;
