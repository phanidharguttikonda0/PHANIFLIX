import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InValidCredentials from './InValidCredentials';
import css from './Login.module.css';
import Logo from './Logo';
import axios from 'axios' ;

function Login(props) {
    
    const [gmail, setMail] = useState("") ;
    const [password, setPassword] = useState("") ;
    const [invalid,setvalid] = useState(false) ;
    const navigate = useNavigate() ;
    
    const login_check = () => {
        async function main(gmail,password) {
            try {
                console.log(gmail, password)
                const result = await axios.post('https://phaniflix.onrender.com/sign-up', {
                    gmail: gmail,
                    password: password
                });
                console.log('hey2')
                console.log('The output value was', result.data);
                if (result.data) {
                    console.log('hey ahas')
                    props.setMail(gmail);
                    navigate('/')
                } else {
                    setvalid(true);
                }
            } catch (error) {
                console.error('Error during login:', error);
                setvalid(true); // Set invalid state if there's an error
            }
        } main(gmail,password)
    }

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
                        
                        login_check()
                        
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