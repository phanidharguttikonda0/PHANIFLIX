import movieTrailer from 'movie-trailer';
import React, { useState } from 'react';
import imdb from '../../Images/imdb.png';
import Trailer from '../homepage/Trailer';
import css from './MovieItem.module.css';
function MovieItem(props) {
    const [url,setUrl] = useState(null) ;
    return ( 
        <div className={css.movieItem}>
            <img src={`https://image.tmdb.org/t/p/w200${props.data.poster_path}`} alt="" className={css.poster_} />
            <div className={css.moviecontent}>
                <h5 className={css.overview}> overview : {props.data.overview.substring(0,150)}{
                    props.data.overview.length > 150 ? "..." : ""
                    }</h5>
                <h6 className={css.h6}>date of release : {props.data.release_date}</h6>    
                <h6 className={css.h6}> Sensor : {props.data.adult ?<strong> A </strong> : <strong>U/A</strong>}</h6>  
                <h6 className={css.imdb}> <img src={imdb} alt="" /> {props.data.popularity.toString().substring(0,3)}/10 </h6>
                <div className={css.buttons}>
                    <button className={css.p} onClick={() => {
                        movieTrailer(props.data.title) 
                        .then(url => {
                            for(let x = 0 ; x < url.length ; x++){
                                if(url[x]==='='){
                                    console.log(url.substring(x+1,url.length))
                                    setUrl(url.substring(x+1,url.length))
                                }
                            }
                        })
                        .catch(error => console.log());
        
                        setUrl(true)
                        
                    }}> Play</button>
                    <button className={css.t} onClick={() =>{
                        movieTrailer(props.data.title)
                        .then(url => {
                            for(let x = 0 ; x < url.length ; x++){
                                if(url[x]==='='){
                                    console.log(url.substring(x+1,url.length))
                                    setUrl(url.substring(x+1,url.length))
                                }
                            }
                        })
                        .catch(error => console.log());
        
                        setUrl(true)
                    }}>Watch Trailer</button>
                </div>
            </div>
            {
                url !== null ? <Trailer setUrl={setUrl}  url={url}/> : console.log("")
            }
        </div>
    );
}

export default MovieItem;