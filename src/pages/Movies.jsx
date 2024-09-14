import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import config from "../../config.json";

const Movies = () => {
  const navigate = useNavigate();
  const backendUrl = config.backendUrl;
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // URL del back-end
    axios
      .get(`${backendUrl}/movies`)
      .then((response) => setMovies(response.data))
      .catch((error) => console.error("Error al obtener películas", error));
  }, [backendUrl]);

  const handleReservation = (movie) => {
    // Redirigir a la ruta de showtimes para la película seleccionada
    navigate(`/movies/${movie.movieId}`);
  };

  return (
    <div className="container">
      <h2 className="text-center my-4">Películas disponibles</h2>
      {!movies ? (
        <p className="text-center text-muted">No hay películas disponibles.</p>
      ) : (
        <ul className="list-group">
          {movies.map((movie) => (
            <li key={movie.movieId} className="list-group-item">
              <h5>{movie.title}</h5>
              <p>Director: {movie.director}</p>
              <p>Duración: {movie.duration} min</p>
              <button
                className="btn btn-primary"
                onClick={() => handleReservation(movie)}
              >
                Reservar
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Movies;
