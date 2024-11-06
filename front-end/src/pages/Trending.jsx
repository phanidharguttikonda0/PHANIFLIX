import React, { useState } from 'react';
import MovieItem from './SearchedMovies/MovieItem';
import css from './Trending.module.css';

function Trending(props) {
    const [year, setYear] = useState("") ;
    const [genre, setGenre] = useState("Horror-27") ;
    const [movies, setMovies] = useState(null) ;
    return (
        <div className={css.trending}>
            <div className={css.inputs}>
                <input type='number' placeholder='enter year' value={year} onChange={(e) => setYear(e.target.value)} 
                className={css.input1}/>
                <select onChange={(e) => setGenre(e.target.value)} className={css.input2}>
                    <option value="Horror-27"> Horror </option>
                    <option value="Action-28"> Action </option>
                    <option value="Animation"> Animation </option>
                    <option value="Comedy-35"> Comedy </option>
                    <option value="Adventure-12"> Adventure </option>
                    <option value="Crime-80"> Crime </option>
                    <option value="Drama-18"> Drama </option>
                    <option value="Family-10751"> Family </option>
                    <option value="Fantasy-14"> Fantasy </option>
                    <option value="Romance-10749"> Romance </option>
                    <option value="Science Fiction-878"> Science Fiction </option>
                    <option value="History-36"> History </option>
                    <option value="Thriller-53"> Thriller </option>
                    <option value="Mystery-9648"> Mystery </option>
                    <option value="War-10752"> War </option>
                </select>
                <button onClick={() => {
                    console.log(`genre was ${genre}`)
                    const url = `https://api.themoviedb.org/3/discover/movie?api_key=38ee7b5f33ca8d57d0c93c66fb8fcac4&with_genres=${genre.substring(genre.indexOf('-')+1, genre.length)}&primary_release_year=${year}&sort_by=popularity.desc`        ;
                    async function main() {
                        const res = await fetch(url) ;
                        const data = await res.json() ;
                        console.log(`here is the list of trending movies for ${year} and ${genre} is ${data}`) ;
                        console.log(data.results)
                        setMovies(data.results)
                    }
                    main() ;
                }} className={css.btn}> Get</button>
            </div>
            <div className={css.trendingContent}>
                {
                    movies !== null ? movies.map((item,index) => <MovieItem data={item} key={index}/>) : console.log("")
                }
                {
                    console.log(`movies !== null ${movies}`)
                }
            </div>
        </div>
    );
}

export default Trending;