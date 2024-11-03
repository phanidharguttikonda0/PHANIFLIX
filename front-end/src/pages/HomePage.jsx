import React from 'react';
import { Carousel } from 'react-bootstrap';
import add from '../Images/add.jpg';
import gk from '../Images/gk.jpg';
import dookudu from '../Images/maharshi.jpg';
import title from '../Images/maharshititle.png';
import css from './HomePage.module.css';
import Adds from './homepage/Adds';
import Content from './homepage/Content';
function HomePage(props) {
    return (
        <div className={css.homepage}>
            <div className={css.adds}>
                <Carousel interval={10000} controls={false} indicators={true}>
                    <Carousel.Item>
                    <div className={css.in}>
                    <Adds data={{poster: add, title: gk, imdb: 9.0, views: '10M+'}}/>
                    </div>
                    </Carousel.Item>
                    <Carousel.Item>
                    <div className={css.in}>
                    <Adds data={{poster: dookudu, title: title, imdb: 9.8, views: '50M+'}}/>
                    </div>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className={css.content}>
                <Content />
            </div>
        </div>
    );
}

export default HomePage;