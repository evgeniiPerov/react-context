import React, { useState, createContext } from 'react'


export const MovieContext = createContext()

export function MovieProvider(props) {
    //Neni export default!
    //MovieProvider jen nazev funkce, vyuzivam props.children
    //value predavam tam kam davam import
    //import {MovieContext} !!
    const [movies, setMovies] = useState([
        {
            name: 'Harry Potter',
            price: '$10',
            id: 23124
        },
        {
            name: 'Game of Thrones',
            price: '$13',
            id: 2566124
        },
        {
            name: 'Inception',
            price: '$12',
            id: 23524
        }
    ])
    return (
        <div>
            <MovieContext.Provider value={[movies, setMovies]}>
                {props.children}
            </MovieContext.Provider>
        </div>
    )
}
