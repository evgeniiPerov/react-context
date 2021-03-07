import React, { useState, useContext } from 'react'
import { MovieContext } from './MovieContext'

export default function AddMovie() {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [movies, setMovies] = useContext(MovieContext)
    const updateName = (e) => {
        //Funkce ktera meni NAME pomoci inputu
        setName(e.target.value)
    }
    const updatePrice = (e) => {
        //Funkce ktera meni NAME pomoci inputu
        setPrice(e.target.value)
    }

    //poslat do formy funkce
    const addMovie = e => {
        e.preventDefault()
        //prevMovies funkce bere kopii array movies
        setMovies(prevMovies => [...prevMovies, { name: name, price: price }])

    }

    return (
        <form onSubmit={addMovie}>
            <input type="text" name="name" value={name} onChange={updateName} />
            <input type="text" name="price" value={price} onChange={updatePrice} />
            <button>Submit</button>
        </form>
    )
}
