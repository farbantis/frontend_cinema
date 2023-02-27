import axios from "axios";
import React, {Fragment} from 'react';
import './App.css';
import {useState, useEffect} from "react";
import MovieList from '../components/movie-list/movie-list.component';
import ModalRegister from "../components/modal-register/modal-register.component";
import Pagination from "../components/pagination/pagination.component";
import {Outlet} from "react-router-dom";

const App = () => {
    const [movies, setMovies] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(0)
    // const [active, setActive] = useState(false)

    useEffect(() => {
        const fetchMovies = async () => {
            const response = await axios.get(`http://127.0.0.1:8000/api/cinema/movies/?page=${currentPage}`);
            setMovies(response.data.results)
            setTotalPages(+response.data.count/20)
        }
    fetchMovies()
    }, [currentPage])

const handlePageChange = async (pageNumber) => {
        setCurrentPage(pageNumber)
};

    return (
        <div className="App">

            {/*<ModalRegister*/}
            {/*    active={active}*/}
            {/*    setActive={setActive}*/}
            {/*/>*/}
            <MovieList
                movies={movies}
            />
            {/*<button onClick={()=>setActive(true)}>Press me</button>*/}
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                handlePageChange={handlePageChange}
                />
        </div>
    );
}

export default App;
