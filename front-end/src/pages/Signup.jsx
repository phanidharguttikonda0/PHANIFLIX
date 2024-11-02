import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import css from './Login.module.css';
import Logo from './Logo';
function Signup(props) {
    const [gmail, setMail] = useState("") ;
    const [password, setPassword] = useState("") ;
    const [confirmPassword, setConfirm] = useState("") ;
    const [mobile, setMobile] = useState("") ;
    const navigate = useNavigate() ;
    
    return (
        <div className={css.login}>
            <Logo className={css.logo}/>
            <div className={css.login_page}>
                <h2 className={css.l}> Sign Up</h2>
                <input type='email' placeholder='Email' className={css.input} value={gmail} onChange={(e) => 
                    setMail(e.target.value)
                }/>
                <input type='password' placeholder='Password' className={css.input} value={password} onChange={(e)=>{
                    setPassword(e.target.value)
                }}/>
                <input type='password' placeholder='Confirm Password' className={css.input} value={confirmPassword} onChange={(e) =>{
                    setConfirm(e.target.value)
                }} />
                <input type='number' placeholder='Mobile Number' className={css.input} value={mobile} onChange={(e) =>{
                    setMobile(e.target.value)
                }} />
                <button className={css.button} onClick={
                    () => {
                        props.setMail(gmail) ;
                        navigate('/') ;
                    }
                }> Sign Up</button>
                <h5 className={css.last}>  have an account <button onClick={() =>{
                    navigate('/login')
                }}> Sign In</button></h5>
            </div>
        </div>
    );
}

export default Signup;