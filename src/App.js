import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes , Link} from 'react-router-dom';
import { MOVIES , USERS} from './Constants';
import Navbar from './Components/Header/Navbar';
import Landing from './Components/Landing/Landing';
import Catalog from './Components/Catalog/Catalog';
import MovieDetails from './Components/MovieDetails/MovieDetails';

function App() {

  const [Movies , setMovies] = useState(MOVIES);
  const [Users , setUsers] = useState(USERS);

  const addMovie = (userId , movieId) =>{
    if (userId != "undefined") {
      
      let users = [...Users]
      let user = users.find(user => user.id == userId)
      let movies = [...Movies] 
      let movie = movies.find(m => m.id == movieId)
      if(user.budget >= 3) {
      if (!user.rentedMovies.find(m => m.id == movieId)) {
        user.rentedMovies.push(movie);
        
        user.budget -= 3
        movie.isRented = true;
        setUsers(users);
        setMovies(movies);
      }
      }
      else{
        alert("you Dont have a money ")
      }
    }

    else {
      return
    }
  }

  const removeMovie =(userId , movieId) =>{
    let users = [...Users]
    let user = users.find(user => user.id == userId)
    let movies = [...Movies] 
    let movie = movies.find(m => m.id == movieId)

    user.rentedMovies = user.rentedMovies.filter((m) => m.id !== movieId);
    user.budget += 3;
    movie.isRented = false;
  
    setUsers(users);
    setMovies(movies);
  }

  return (
    <Router>
      
        <div className="App">
          <Navbar />
        </div>

      <Routes>
      <Route path="/" element={<Landing users={Users} />} />
      <Route path="/:userId?/catalog" element={<Catalog movies={Movies} users={Users} addMovie={addMovie} removeMovie={removeMovie} />}  />
      <Route path="/:userId?/catalog/:movieId" element={<MovieDetails movies={Movies} />} />
      </Routes>


    </Router>
  );
}

export default App;
