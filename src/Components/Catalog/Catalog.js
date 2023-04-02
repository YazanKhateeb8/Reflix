import React , { useState } from 'react'
import { useParams } from 'react-router-dom'
import Movie from './Movie';
import'./Catalog.css';
import Rented from '../Rented/Rented';

export default function Catalog({movies , users , addMovie , removeMovie}) {
  const { userId } = useParams();
  const [inputValue, setInputValue] = useState('');
  const [filterMovies , setFilterMovies] = useState(movies)
  
  const myBudget = () =>{
    if(userId != "undefined"){
        const user = users.find(u => u.id == userId);
        const { budget } = user
        return budget
    }
  }

  const updateSearch = (event) => {
    setInputValue( event.target.value )
    
    if( event.target.value == "") {
      setFilterMovies(movies)
    }
    else{
      let arrayMovies = []
      movies.map(movie => { 
        if( movie.title.toLowerCase().includes(event.target.value)){
          arrayMovies.push(movie)
        }
      })
      setFilterMovies(arrayMovies)
    }
}



  const isRented = () => {
    if(userId != "undefined") {
      const user = users.find(u => u.id == userId)
        return user.rentedMovies.length > 0 ? <Rented userId={userId} rentedMovies={user.rentedMovies} removeMovie={removeMovie} /> : <div></div>
  }
  else {
    return
  }
}


  const moviesCatalog = () => {
      let movieData = movies.filter(m => !m.isRented)
    return filterMovies.map((movie) => <Movie key={movie.id} userId={userId} movie={movie} users={users} addMovie={addMovie}/>)
  }
  
  return (
    <div>
          <input type = "text" placeholder = "Search" value={inputValue} onChange = {updateSearch} />
          <span>budget : {myBudget()}$</span>
            {isRented()}
          <h3 className = "section-title">Catalog:</h3>
          <div className="list">
            {moviesCatalog()}
          </div>
    </div>
  )
}
