import MovieCard from '../movie-card/movie-card.component'
import './movie-list.styles.css'


const MovieList = ({movies}) => {
    return (
        <div className="main_container">
            <div className="main_row">
                {movies.map((movie) => {
                    return (
                        <MovieCard movie={movie} />
                    )
                })}
            </div>
        </div>
    )
}


export default MovieList;