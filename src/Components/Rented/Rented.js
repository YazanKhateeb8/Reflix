import React from "react";

export default function Rented({ rentedMovies, userId, removeMovie }) {
  
  const unRentMovie = (movieId) => {
    removeMovie(userId, movieId);
  };

  const rented = () => {
    return rentedMovies.map((m) => (
      <div className="movie">
        <img src={m.img} />
        <button className="rent-movie" onClick={() => unRentMovie(m.id)}>
          -
        </button>
      </div>
    ));
  };

  return (
    <div>
      <h3 className="section-title">Rented :</h3>
      <div className="list">{rented()}</div>
    </div>
  );
}
