import React from "react";
import { Link } from "react-router-dom";
import "./Catalog.css";

export default function Movie({ userId, movie, addMovie }) {
  const rentMovie = () => {
    addMovie(userId, movie.id);
  };

  const checkStatus = () => {
    if (userId != "undefined") {
      return (
        <div className="movie">
          <Link to={`/${userId}/catalog/${movie.id}`}>
            <img src={movie.img} />
          </Link>
          <button className="rent-movie" onClick={rentMovie}>
            +
          </button>
        </div>
      );
    } 
    else {
      return (
        <div className="movie">
          <Link to={`/catalog/${movie.id}`}> 
            <img src={movie.img} />
          </Link>
        </div>
      );
    }
  };

  return <div>{checkStatus()}</div>;
}
