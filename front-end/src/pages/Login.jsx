import React from 'react';
import css from './Login.module.css';

function Login(props) {
    //* "https://bit.ly/2E3scwW"
    return (
        <div className={css.login}>
            <h1 className={css.logo}> PHANIFLIX</h1>
            <div className={css.login_page}>
                <h2 className={css.l}> Sign In</h2>
                <input type='email' placeholder='Email' className={css.input}/>
                <input type='password' placeholder='Password' className={css.input}/>
                <button className={css.button}> Sign In</button>
                <h5 className={css.last}> Don't have an account <button> Sign Up</button></h5>
            </div>
        </div>
    );
}

export default Login;