import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InValidCredentials from './InValidCredentials';
import css from './Login.module.css';
import Logo from './Logo';
import axios from 'axios' ;
import Loading from './Loading';

function Login(props) {
    
    const [gmail, setMail] = useState("") ;
    const [password, setPassword] = useState("") ;
    const [invalid,setvalid] = useState(false) ;
    const [invalidData,setInvalidData] = useState("")
    const navigate = useNavigate() ;
    const [load,setLoad] = useState(false) ;
    
    const login_check = () => {
        async function main(gmail,password) {
            try {
                console.log(gmail, password)
                const result = await axios.post('https://phaniflix.onrender.com/login', {
                    gmail: gmail,
                    password: password
                });
                console.log('hey2')
                console.log('The output value was', result.data);
                if (result.data) {
                    console.log('hey ahas')
                    props.setMail(gmail);
                    navigate('/')
                    setLoad(false)
                } else {
                    setInvalidData("invalid credentials")
                    setvalid(true);
                    setLoad(false)
                }
                setLoad(false)
            } catch (error) {
                console.error('Error during login:', error);
                setLoad(false)
                setvalid(true); // Set invalid state if there's an error
                
            }
        }
        const gmailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/; 
        if(gmail.match(gmailPattern)){
            if(password.length >= 6) main(gmail,password)
            else{
                setInvalidData("password min of 6")
                setLoad(false)
                setvalid(true)
                
            }
        }else{
            setInvalidData("invalid mail-id")
            setLoad(false)
            setvalid(true)
        }
        
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

                        // using regular expressions over here

                        setLoad(true)
                        login_check()
                        
                    }
                }> Sign In</button>
                <h5 className={css.last}> Don't have an account <button onClick={() =>{
                    navigate('/sign-up')
                }}> Sign Up</button></h5>
                {
                    invalid ? <InValidCredentials setvalid={setvalid} data={invalidData}/> : console.log("")
                }
            </div>
            {
                load ? <Loading /> : console.log("")
            }
        </div>
    );
}

export default Login;