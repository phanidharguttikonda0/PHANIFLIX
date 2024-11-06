import React,{useState} from 'react';

import imdb from '../../Images/imdb.png';
import css from './Adds.module.css';
import Trailer from './Trailer';
 
function Adds(props) {
    const [url, setUrl] = useState(null) ;

    console.log(props.data)
    return (
        <div className={css.ads}>
            <div className={css.left}>
                <img src={props.data.title} alt="" className={css.titleposter}/>
                <div className={css.details}>
                    <span className={css.s} style={{"color": 'White'}}> <img src={imdb} alt="" /> {props.data.imdb}/10</span>
                    <h6 className={css.str}> <span className={css.sd}>{props.data.views}</span> Streams</h6>
                </div>
                <div className={css.buttons}>
                    <button className={css.p} onClick={
                        () =>{
                            setUrl(props.url)
                        }
                    }>Play</button>
                    <button className={css.t} onClick={
                        () =>{
                            setUrl(props.url)
                        }
                    }>Watch Trailer</button>
                </div>
            </div>
            <img src={props.data.poster} alt="" className={css.poster}/>
            {
                url !== null ? <Trailer url={url} setUrl={setUrl}/> : console.log("")
            }
        </div>
    );
}

export default Adds;