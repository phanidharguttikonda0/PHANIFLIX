import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InValidCredentials from './InValidCredentials';
import css from './Login.module.css';
import Logo from './Logo';
import axios from 'axios';
import Loading from './Loading';
function Signup(props) {
    const [gmail, setMail] = useState("") ;
    const [password, setPassword] = useState("") ;
    const [mobile, setMobile] = useState("") ;
    const [invalid, setinvalid] = useState(false) ;
    const [invalidData,invalidDataSet] = useState("") ;
    const [username,setUserName] = useState("") ;
    const navigate = useNavigate() ;
    const [load,setload] = useState(false) ;
    
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
                <input type='number' placeholder='Mobile Number' className={css.input} value={mobile} onChange={(e) =>{
                    setMobile(e.target.value)
                }} />
                <input type='text' placeholder='User-name' className={css.input} value={username} onChange={(e) =>{
                    setUserName(e.target.value)
                }} />
                <button className={css.button} onClick={
                    () => {
                        setload(true)
                        async function main(){
                            // https://phaniflix.onrender.com/sign-up
                           const result = await axios.post('https://phaniflix.onrender.com/sign-up',{
                                gmail: gmail,
                                mobile: mobile,
                                password: password,
                                username: username,
                            }) ;
                            console.log('The result was ',result.data) ;
                            if(result.data){
                                props.setMail(gmail)
                                setload(false)
                                navigate('/')
                                
                            }else{
                                invalidDataSet("creditionals already exist")
                                setload(false)
                                setinvalid(true) ;
                            }

                        }
                        const gmailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/; 
                        if (gmail.match(gmailPattern)) {
                            const mobilePattern = /^[6-9]{1}[0-9]{9}$/ ;
                            if(mobile.match(mobilePattern)){
                                const usernamePattern = /^[a-zA-Z_0-9]{4,25}$/  ;
                                if(username.match(usernamePattern)){
                                    if(password.length >= 6){
                                        main()
                                    }else{
                                        invalidDataSet("password length min 6")
                                        setinvalid(true)
                                        setload(false)
                                    }
                                }else{
                                    invalidDataSet("invalid username")
                                    setinvalid(true)
                                    setload(false)
                                }

                            }else{
                                invalidDataSet("invalid mobile")
                                setinvalid(true)
                                setload(false)
                            }
                        }else{
                            invalidDataSet("invalid gmail")
                            setinvalid(true)
                            setload(false)
                        }
                        
                    }
                }> Sign Up</button>
                <h5 className={css.last}>  have an account <button onClick={() =>{
                    navigate('/login')
                }}> Sign In</button></h5>
                {
                    invalid ? <InValidCredentials data={invalidData} setvalid={setinvalid}/> : console.log("")
                }
            </div>
            {
                load ? <Loading /> : ""
            }
        </div>
    );
}

export default Signup;