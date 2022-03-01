import React from 'react'
import "./MovieList.css"


function MovieList({movies, favouriteComponent}) {

    const FavouriteComponent = favouriteComponent
  
    return (
        
    <div className='movieList' >

        {movies.map((movie) =>
        <div className='image-container d-flex justify-content-star'>
           < img src= {movie.Poster} alt="poster"></img>
           <div className='overlay d-flex align-items-center justifiy-content' >
               <FavouriteComponent />
           </div> 
        </div>
        )}            

    </div>
  )
}

export default MovieList