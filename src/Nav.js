import React, { useContext } from 'react'
import { MovieContext } from './MovieContext'


export default function Nav() {
    const [movies, setMovies] = useContext(MovieContext)
    return (
        <nav>
            <h3>Evgenii Perov</h3>
            <p>List of Movies: {movies.length}</p>
        </nav>
    )
}
