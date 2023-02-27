import {Link, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import axios from "axios";
import './actor-card.styles.css'

const ActorCard = ({actors}) => {
    const {id, name, photo, imdb_code, genres} = actors
    const {actorId} = useParams();
    const [actor, setActor] = useState({})
    // useEffect(() => {
    //     const fetchActor = async () => {
    //         const response = await axios.get(`http://127.0.0.1:8000/api/cinema/actor/${actorId}`);
    //         setActor(response.data)
    //     }
    //     fetchActor()
    // }, [])
    return (
        <div className="main_container">
            <div className="main_row">
                <div key={id} className="actor_card">
                    <div className="actor_card_body">
                        <div className="actor_card_image">
                            <Link to={`/actor/${id}/`}>
                                <img className="actor_card_image__img" src={photo} alt="actor"/>
                                <div className="actor_card_image__overlay">
                                    <div className="actor_card_image__overlay_rating">{imdb_code} / 10</div>
                                    <div className="actor_card_image__overlay_genre">
                                        {genres.map((genre) => {
                                            return (
                                                <div className="actor_card_image__overlay_genres">{genre}</div>
                                            )
                                        })}
                                    </div>
                                    <div className="actor_card_image__overlay_button">ПОДРОБНОСТИ</div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="actor_card_title">
                        <div>{name.substring(0, 19)}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ActorCard;