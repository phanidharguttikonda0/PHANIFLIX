import React from 'react';
import { useNavigate } from 'react-router-dom';
import chat from '../Images/chat.svg';
import home from '../Images/home.svg';
import profile from '../Images/profile.svg';
import search from '../Images/search.svg';
import trending from '../Images/trending.svg';
import css from './Nav.module.css';

function Nav(props) { 
    const navigate = useNavigate() ;
    return (
        <div className={css.nav_bar}>
                <div className={css.nav_bar_inside}>
                <img src={home} alt='home' onClick={() => {
                    navigate('/')
                }}/>
                <img src={search} alt='search' onClick={() => {
                    navigate('search')
                }}/>
                <img src={trending} alt='trending' onClick={() => {
                    navigate('trending')
                }}/>
                <img src={chat} alt='chat' onClick={() => {
                    navigate('chat')
                }}/>
                <img src={profile} alt='profile' onClick={() => {
                    navigate('profile')
                }}/>
                </div>
        </div>
    );
}

export default Nav;