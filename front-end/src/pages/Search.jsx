import React, { useState } from 'react';
import css from './Search.module.css';
import SearchBar from './SearchBar';
import MovieItem from './SearchedMovies/MovieItem';
function Search(props) {
    const [items, setItems] = useState(null) ;
    return (
        <div className={css.search}>
            <div>
                <SearchBar setItems={setItems} />
            </div>
            <div className={css.movies}>
                {
                    items !== null ? 
                        items.map((item,index) => <MovieItem key={index} data={item} />)
                     : console.log("Items yet to reach")
                }
            </div>
        </div>
    );
}

export default Search;