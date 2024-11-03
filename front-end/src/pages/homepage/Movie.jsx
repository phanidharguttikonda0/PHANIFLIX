import movieTrailer from "movie-trailer";
import React, { useState } from 'react';
import css from './Movie.module.css';
import Trailer from "./Trailer";
function Movie(props) {
    const [url,setUrl] = useState(null) ;
    return (
        <div className={css.movie}>
            <img src={`https://image.tmdb.org/t/p/w200${props.movie.poster_path}`} alt='Nothing Found' onClick={
                () => {
                    console.log('The movie was ',props.movie)
                    movieTrailer(props.movie.title) // Searches for "Inception" trailer on YouTube
                .then(url => {
                    for(let x = 0 ; x < url.length ; x++){
                        if(url[x]==='='){
                            console.log(url.substring(x+1,url.length))
                            setUrl(url.substring(x+1,url.length))
                        }
                    }
                })
                .catch(error => console.log());

                }
            }/>
            {
                console.log(url, 'here is the url for ',props.movie.title)
            }
            {
                url !== null? <Trailer url={url} setUrl={setUrl} /> : console.log("No movie was selected")
            }
        </div>
    );
}

export default Movie;