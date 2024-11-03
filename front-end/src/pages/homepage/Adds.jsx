import React from 'react';

import imdb from '../../Images/imdb.png';
import css from './Adds.module.css';

function Adds(props) {
    console.log(props.data)
    return (
        <div className={css.ads}>
            <div className={css.left}>
                <img src={props.data.title} alt="" className={css.titleposter}/>
                <div className={css.details}>
                    <span className={css.s} style={{"color": 'White'}}> <img src={imdb} alt="" /> {props.data.imdb}/10</span>
                    <h6> <span className={css.sd}>{props.data.views}</span> Streams</h6>
                </div>
                <div className={css.buttons}>
                    <button className={css.p}>Play</button>
                    <button className={css.t}>Watch Trailer</button>
                </div>
            </div>
            <img src={props.data.poster} alt="" className={css.poster}/>
        </div>
    );
}

export default Adds;