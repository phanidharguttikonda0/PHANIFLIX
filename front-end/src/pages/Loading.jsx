import React from "react";
import ReactDOM from 'react-dom' ;
import css from './Loading.module.css' ;

function Loading(props){
    return ReactDOM.createPortal(
        <div className={css.spinner_container}>
            <div className={css.loading_spinner}></div>
        </div>, document.getElementById('loading')
    );
}

export default Loading ;