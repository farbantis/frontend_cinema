import './movie-card.styles.css'
import {Link} from "react-router-dom";

const MovieCard = ({movie}) => {
    const {id, title_english, genres, rating, medium_cover_image } = movie
    return (
                <div key={id} className="card">
                    <div className="card_body">
                        <div className="card_image">
                            <Link to={`/movie/${id}/`}>
                                <img className="card_image__img" src={medium_cover_image} alt="movie" />
                                    <div className="card_image__overlay">
                                        <div className="card_image__overlay_rating">{rating} / 10</div>
                                        <div className="card_image__overlay_genre">
                                            {genres.map((genre)=>{
                                                return (
                                                    <div className="card_image__overlay_genres">{genre}</div>
                                                )})}
                                        </div>
                                        {/*<div className="card_image__overlay_button">ПОДРОБНОСТИ</div>*/}
                                    </div>
                            </Link>
                        </div>
                    </div>
                    <div className="card_title">
                        <div>{ title_english.substring(0, 19) }</div>
                    </div>
                </div>
)
}


export default MovieCard