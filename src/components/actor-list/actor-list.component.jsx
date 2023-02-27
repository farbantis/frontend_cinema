import '../movie-list/movie-list.styles.css'
import {useEffect, useState} from "react";
import axios from "axios";
import ActorCard from "../actor-card/actor-card.component";


const ActorList = () => {
    const [actors, setActors] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(0)

    useEffect(() => {
        const fetchActors = async () => {
            const response = await axios.get(`http://127.0.0.1:8000/api/cinema/actors/`);
            setActors(response.data.results)
            setTotalPages(+response.data.count/20)
        }
    fetchActors()
    }, [currentPage])

// const handlePageChange = async (pageNumber) => {
//         setCurrentPage(pageNumber)
// };


    return (
        <div className="main_container">
            <div className="main_row">
                {actors.map((actors) => {
                    return (
                        <ActorCard actors={actors} />
                    )
                })}
            </div>
        </div>
    )
}


export default ActorList;