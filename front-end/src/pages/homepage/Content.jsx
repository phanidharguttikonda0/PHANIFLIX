import React from 'react';
import { Carousel } from 'react-bootstrap';
import useFetch from '../useFetch';
import css from './Content.module.css';
import Movie from './Movie';
function Content(props) {
    //* for calling the data from the api we need call it in a useMemo hook because when one state changes 
    //* other also re-renders with out any changes in other state values
    const trendingMovies = useFetch(
        "https://api.themoviedb.org/3/movie/popular?api_key=38ee7b5f33ca8d57d0c93c66fb8fcac4&page=1",
        "https://api.themoviedb.org/3/movie/popular?api_key=38ee7b5f33ca8d57d0c93c66fb8fcac4&page=2",
        8) ;
    const popularMovies = useFetch(
        "https://api.themoviedb.org/3/trending/movie/day?api_key=38ee7b5f33ca8d57d0c93c66fb8fcac4&page=1",
        "https://api.themoviedb.org/3/trending/movie/day?api_key=38ee7b5f33ca8d57d0c93c66fb8fcac4&page=2",
        8) ;
    const topRatedMovies = useFetch(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=38ee7b5f33ca8d57d0c93c66fb8fcac4&page=1",
        "https://api.themoviedb.org/3/movie/top_rated?api_key=38ee7b5f33ca8d57d0c93c66fb8fcac4&page=2",
        8) ;
    const horrorMovies = useFetch(
        "https://api.themoviedb.org/3/discover/movie?api_key=38ee7b5f33ca8d57d0c93c66fb8fcac4&with_genres=27&page=1",
        "https://api.themoviedb.org/3/discover/movie?api_key=38ee7b5f33ca8d57d0c93c66fb8fcac4&with_genres=27&page=2",
        8) ;
    const comedyMovies = useFetch(
        "https://api.themoviedb.org/3/discover/movie?api_key=38ee7b5f33ca8d57d0c93c66fb8fcac4&with_genres=35&page=1",
        "https://api.themoviedb.org/3/discover/movie?api_key=38ee7b5f33ca8d57d0c93c66fb8fcac4&with_genres=35&page=2",
        8) ;
    const romanticMovies = useFetch(
        "https://api.themoviedb.org/3/discover/movie?api_key=38ee7b5f33ca8d57d0c93c66fb8fcac4&with_genres=10749&page=1",
        "https://api.themoviedb.org/3/discover/movie?api_key=38ee7b5f33ca8d57d0c93c66fb8fcac4&with_genres=10749&page=2",
        8) ;
    const teluguMovies = useFetch(
        "https://api.themoviedb.org/3/discover/movie?api_key=38ee7b5f33ca8d57d0c93c66fb8fcac4&with_original_language=te&page=1",
        "https://api.themoviedb.org/3/discover/movie?api_key=38ee7b5f33ca8d57d0c93c66fb8fcac4&with_original_language=te&page=2",
        8) ;
    const popularTelugu = useFetch(
        "https://api.themoviedb.org/3/discover/movie?api_key=38ee7b5f33ca8d57d0c93c66fb8fcac4&with_original_language=te&sort_by=popularity.desc&page=3",
        "https://api.themoviedb.org/3/discover/movie?api_key=38ee7b5f33ca8d57d0c93c66fb8fcac4&with_original_language=te&sort_by=popularity.desc&page=4",
        8)
    return (
        <div className={css.mainContent}>
            
            <div className={css.moviess}>
                <h5> Trending Now</h5>
                <Carousel interval={10000} controls={true} indicators={false}>
                    {
                    trendingMovies !== undefined ? trendingMovies.map((movieChunk,index) => 
                    <Carousel.Item key={index}>
                        <div className="d-flex justify-content-around">
                        {
                            movieChunk.map((movie,index) => <Movie key={index}  movie={movie} />)
                        }
                        </div>
                    </Carousel.Item>
                ) : console.log("trending movies was undefined")
            }
                </Carousel>
            
            </div>
            <div className={css.moviess}>
            <h5> Popular Movies</h5>
            <Carousel interval={10000} controls={true} indicators={false}>
                    {
                    popularMovies !== undefined ? popularMovies.map((movieChunk,index) => 
                    <Carousel.Item key={index}>
                        <div className="d-flex justify-content-around">
                        {
                            movieChunk.map((movie,index) => <Movie key={index}  movie={movie} />)
                        }
                        </div>
                    </Carousel.Item>
                ) : console.log("popular movies was undefined")
            }
                </Carousel>
            </div>
            <div className={css.moviess}>
                <h5> Horror movies </h5>
                <Carousel interval={10000} controls={true} indicators={false}>
                    {
                    horrorMovies !== undefined ? horrorMovies.map((movieChunk,index) => 
                    <Carousel.Item key={index}>
                        <div className="d-flex justify-content-around">
                        {
                            movieChunk.map((movie,index) => <Movie key={index}  movie={movie} />)
                        }
                        </div>
                    </Carousel.Item>
                ) : console.log("horror movies was undefined")
            }
                </Carousel>
            
            </div>
            <div className={css.moviess}>
                <h5> Top rated movies </h5>
                <Carousel interval={10000} controls={true} indicators={false}>
                    {
                    topRatedMovies !== undefined ? topRatedMovies.map((movieChunk,index) => 
                    <Carousel.Item key={index}>
                        <div className="d-flex justify-content-around">
                        {
                            movieChunk.map((movie,index) => <Movie key={index}  movie={movie} />)
                        }
                        </div>
                    </Carousel.Item>
                ) : console.log("topRated movies was undefined")
            }
                </Carousel>
            
            </div>
            <div className={css.moviess}>
                <h5> In Telugu </h5>
                <Carousel interval={10000} controls={true} indicators={false}>
                    {
                    teluguMovies !== undefined ? teluguMovies.map((movieChunk,index) => 
                    <Carousel.Item key={index} className={css.caroser}>
                        <div className="d-flex justify-content-around">
                        {
                            movieChunk.map((movie,index) => <Movie key={index}  movie={movie} />)
                        }
                        </div>
                    </Carousel.Item>
                ) : console.log("trending movies was undefined")
            }
                </Carousel>
            
            </div>
            <div className={css.moviess}>
                <h5> Popular In Telugu </h5>
                <Carousel interval={10000} controls={true} indicators={false}>
                    {
                    popularTelugu !== undefined ? popularTelugu.map((movieChunk,index) => 
                    <Carousel.Item key={index}>
                        <div className="d-flex justify-content-around">
                        {
                            movieChunk.map((movie,index) => <Movie key={index}  movie={movie} />)
                        }
                        </div>
                    </Carousel.Item>
                ) : console.log("trending movies was undefined")
            }
                </Carousel>
            
            </div>
            <div className={css.moviess}>
                <h5> Romantic movies </h5>
                <Carousel interval={10000} controls={true} indicators={false}>
                    {
                    romanticMovies !== undefined ? romanticMovies.map((movieChunk,index) => 
                    <Carousel.Item key={index}>
                        <div className="d-flex justify-content-around">
                        {
                            movieChunk.map((movie,index) => <Movie key={index}  movie={movie} />)
                        }
                        </div>
                    </Carousel.Item>
                ) : console.log("romantic movies was undefined")
            }
                </Carousel>
            
            </div>
            <div className={css.moviess}>
                <h5> Comedy movies </h5>
                <Carousel interval={10000} controls={true} indicators={false}>
                    {
                    comedyMovies !== undefined ? comedyMovies.map((movieChunk,index) => 
                    <Carousel.Item key={index}>
                        <div className="d-flex justify-content-around">
                        {
                            movieChunk.map((movie,index) => <Movie key={index}  movie={movie} />)
                        }
                        </div>
                    </Carousel.Item>
                ) : console.log("comedy movies was undefined")
            }
                </Carousel>
            
            </div>
        </div>
    );
}

export default Content;