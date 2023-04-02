import React from 'react'
import { useParams } from 'react-router-dom'
import'./MovieDetails.css';

export default function MovieDetails( { movies } ) {
  const { movieId } = useParams();
  const movie = movies.find((m) => m.id == movieId)
  const {title , year , img , descrShort} = movie;

  return (
    <div className='card'>
      <h3>{title} ({year})</h3>
      <img src={img} />
      <div><h4>Movie Description: <p>{descrShort}</p></h4></div>
    </div>
  )
}
