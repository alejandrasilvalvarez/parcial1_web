import React from 'react'
import { useState,useEffect } from 'react';

export function CardUI() {

    const [moviesList, setMoviesList] = useState([]);
    useEffect(()=>{
        const URL = "https://api.themoviedb.org/3/discover/movie?api_key=b507dc73409f8e879464dad485147780&language=es-ES&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate";
        fetch(URL).then(data => data.json()).then(data => {
            setMoviesList(data.results);
        })
    }, []);
    useEffect(()=>{
        console.log(moviesList);
    },[moviesList])

  return (
    <div className='container'>
        <div className='row'>
        {
             Array.isArray(moviesList) && moviesList.map((Movie,id)=>{
                return(
                    <> 
                        <div class="card col-xl-3 col-md-6" key={id}>
                                <img src={`https://image.tmdb.org/t/p/w500/${Movie.poster_path}`} class="card-img-top" alt="..."></img>
                            <div class="card-body">
                                <h5 class="card-title">{Movie.title}</h5>
                                <p class="card-text">{Movie.overview.substring(0,100)}</p>
                                <a href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#exampleModal${id}`}>Detalles</a>
                            </div>
                            </div>
                            


                        <div class="modal fade" id={`exampleModal${id}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">{Movie.title}</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                            {Movie.overview}
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Save changes</button>
                            </div>
                            </div>
                        </div>
                        </div>
                    </>
                )

            })
        }
        </div>
        
    </div>
  )
}