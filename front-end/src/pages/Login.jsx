import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InValidCredentials from './InValidCredentials';
import css from './Login.module.css';
import Logo from './Logo';

function Login(props) {
    
    const [gmail, setMail] = useState("") ;
    const [password, setPassword] = useState("") ;
    const [invalid,setvalid] = useState(false) ;
    const navigate = useNavigate() ;
    
    return (
        <div className={css.login}>
            <Logo className={css.logo}/>
            <div className={css.login_page}>
                <h2 className={css.l}> Sign In</h2>
                <input type='email' placeholder='Email' className={css.input} value={gmail} onChange={(e) => 
                    setMail(e.target.value)
                }/>
                <input type='password' placeholder='Password' className={css.input} value={password} onChange={(e)=>{
                    setPassword(e.target.value)
                }}/>
                <button className={css.button} onClick={
                    () => {
                        if(gmail.length === 0){
                            console.log("hey")
                            setvalid(true)
                        }
                        else{
                            props.setMail(gmail) ;
                            navigate('/') ;
                        }
                        
                    }
                }> Sign In</button>
                <h5 className={css.last}> Don't have an account <button onClick={() =>{
                    navigate('/sign-up')
                }}> Sign Up</button></h5>
                {
                    invalid ? <InValidCredentials setvalid={setvalid} data={"invalid credentials"}/> : console.log("")
                }
            </div>
        </div>
    );
}

export default Login;