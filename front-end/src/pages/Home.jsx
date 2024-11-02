import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MainHome from './MainHome';

function Home(props) {
    const navigate = useNavigate() ;
    useEffect(() => {
        if (props.gmail === null){
            console.log(' does navigating       ')
            navigate('/login')
        }
    }, [props.gmail,props.setMail,navigate])

    return <div>
        {
            props.gmail !== null ?  <MainHome /> : console.log("nothing was there")
        }
    </div>

}

export default Home;