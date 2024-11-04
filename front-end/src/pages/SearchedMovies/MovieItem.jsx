import React from 'react';
import imdb from '../../Images/imdb.png';
import css from './MovieItem.module.css';
function MovieItem(props) {
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
                    <button className={css.p}> Play</button>
                    <button className={css.t}>Watch Trailer</button>
                </div>
            </div>
        </div>
    );
}

export default MovieItem;