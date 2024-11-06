import React from 'react';
import ReactDOM from 'react-dom';
import YouTube from 'react-youtube';
import css from './Trailers.module.css';

function Trailer(props) {
    return (
        ReactDOM.createPortal(
            <div className={css.Trailer}>
            <YouTube videoId={props.url} opts={{
                    height: '390',
                    width: '640',
                    playerVars: {
                    autoplay: 1,
                    },
                }} className={css.yt}/>
            <button onClick={() => {
                    props.setUrl(null) ;
            }} className={css.btn}> Close Player </button>
        </div>, document.getElementById('overlay-root') 
        )
    );
}

export default Trailer;