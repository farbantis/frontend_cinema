import React from 'react';
import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import './movie-detals.styles.css';

const Movie = () => {
    const {movieId} = useParams();
    const [movie, setMovie] = useState({})
    useEffect(() => {
        const fetchMovie = async () => {
            const response = await axios.get(`http://127.0.0.1:8000/api/cinema/movie/${movieId}`);
            setMovie(response.data)
        }
        fetchMovie()
    }, [])
    return (
        <div className="main_container">
            <div className="main_row">
                <div className="movie_info">
                    <div className="movie_info__picdate">
                        <div className="movie_info__photo">
                            <img src={movie.medium_cover_image} alt=""/>
                        </div>
                        <div className="movie_info__ticket">
                            <button className="movie_info__ticket_btn"> BUY THIS MOVIE</button>
                        </div>
                        <div className="movie_info__ticket">
                            <Link to="/" className="movie_info__ticket_btn"> BACK TO THE MOVIES LIST</Link>
                        </div>
                    </div>
                    <div className="movie_info_details">
                        <div className="movie_info__name">{movie.title_english}</div>
                        <div className="movie_info__other">{movie.year}</div>
                        <div className="movie_info__other">
                            {/*{movie.genres}*/}
                            {/*genres: {movie.genres.map((el)=> `${el}`).join(", ")}*/}
                        </div>
                        <div className="movie_info__other">rating: {movie.rating} / 10</div>
                        <div className="movie_info__other">duration: {movie.runtime} min</div>
                        <div className="movie_info__other">{movie.description_full} </div>
                    </div>
                    <div className="movie_info_similar">
                        similar movies
                    </div>
                </div>

                <div className="movie_pictures">
                    <div className="movie_pictures__trailer">trailer</div>
                    <div className="movie_pictures__photos">photos</div>
                </div>
                <div className="movie_comrev">
                    <div className="movie_comments">comments</div>
                    <div className="movie_reviews">reviews</div>
                </div>
                {/*<div className="movie_info__other">*/}
                {/*    <img src={movie.large_screenshot_image1} alt="movie"/>*/}
                {/*</div>*/}
                {/*<div className="movie_info__other">*/}
                {/*    <img src={movie.large_screenshot_image2} alt="movie"/>*/}
                {/*</div>*/}
            </div>
        </div>
    )
}

export default Movie;