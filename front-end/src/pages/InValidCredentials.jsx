import React from 'react';
import ReactDOM from 'react-dom';
import css from './InValidCredentials.module.css';
function InValidCredentials(props) {
    return ReactDOM.createPortal(
        <div className={css.invalid}>
            <h5> {props.data} </h5>
            <button onClick={() =>{
                props.setvalid(false)
            }}> close </button>
        </div>, document.getElementById("invalid")
    );
}

export default InValidCredentials;