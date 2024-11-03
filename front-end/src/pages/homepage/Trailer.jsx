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
                }} />
            <button onClick={() => {
                props.setUrl(null) ;
            }}> Close Player </button>
        </div>, document.getElementById('overlay-root') 
        )
    );
}

export default Trailer;