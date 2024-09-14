import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import config from "../../config.json";
import NumericSelector from "../components/NumericSelector";

const Showtimes = () => {
  const { movieId } = useParams();
  const backendUrl = config.backendUrl;
  const customerId = config.customerId;
  const [showtimes, setShowtimes] = useState([]);
  const [seats, setSeats] = useState(1);

  useEffect(() => {
    // URL del back-end
    axios
      .get(`${backendUrl}/movies/${movieId}`)
      .then((response) => setShowtimes(response.data))
      .catch((error) => console.error("Error al obtener showtimes", error));
  }, [backendUrl, movieId]);

  function handleReservation(showtimeId) {
    const reservationData = {
      customerId: customerId,
      showtimeId,
      reservedSeats: seats,
    };

    axios
      .post(`${backendUrl}/reservations`, reservationData)
      .then((response) => {
        alert("Reservación exitosa");
      })
      .catch((error) => console.error("Error al hacer la reservación", error));
  }

  const dateFormat = {
    weekday: "long", // Día de la semana (lunes, martes, etc.)
    year: "numeric", // Año con 4 dígitos
    month: "long", // Mes completo (enero, febrero, etc.)
    day: "numeric", // Día del mes
    hour: "numeric", // Hora
    minute: "numeric", // Minutos
    hour12: true, // Formato 12 horas (AM/PM)
  };

  return (
    <div className="container">
      <h2 className="text-center my-4">Horarios disponibles</h2>
      {!showtimes ? (
        <p className="text-center text-muted">No hay horarios disponibles.</p>
      ) : (
        <ul className="list-group">
          {showtimes.map((showtime) => (
            <li key={showtime.showtimeId} className="list-group-item">
              <h4>Pelicula: {showtime.movie.title}</h4>
              <p>
                Hora:{" "}
                {new Date(showtime.startTime).toLocaleString(
                  "es-ES",
                  dateFormat
                )}
              </p>
              <p>Sala: {showtime.movieRoomNumber} min</p>
              <button
                className="btn btn-primary"
                onClick={() => handleReservation(showtime.showtimeId)}
              >
                Reservar
              </button>
              <NumericSelector onSeatsChange={setSeats} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Showtimes;
