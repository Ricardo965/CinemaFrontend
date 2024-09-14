import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import config from "../../config.json";

const Reservations = () => {
  const [reservations, setReservations] = useState([]);
  const [customerName, setCustomerName] = useState("");
  const [seats, setSeats] = useState(1);

  const backendUrl = config.backendUrl;
  const customerId = config.customerId;

  const fetchReservations = useCallback(() => {
    axios
      .get(`${backendUrl}/reservations/${customerId}`)
      .then((response) => {
        setReservations(response.data);
      })
      .catch((error) => console.error("Error al obtener reservaciones", error));
  }, [backendUrl, customerId]);

  useEffect(() => {
    fetchReservations();
  }, [fetchReservations]);

  function handleCancel(reservationId) {
    axios
      .delete(`${backendUrl}/reservations/${reservationId}`)
      .then((response) => {
        fetchReservations();
        alert("Reservación cancelada");
      })
      .catch((error) =>
        console.error("Error al cancelar la reservación", error)
      );
  }

  return (
    <div className="container">
      <h2 className="text-center my-4">Tus reservas</h2>
      {!reservations ? (
        <p className="text-center text-muted">No hay películas disponibles.</p>
      ) : (
        <ul className="list-group">
          {reservations.map((reservation) => (
            <li key={reservation.reservationId} className="list-group-item">
              <h5>Reservación</h5>
              <p>Sillas reservadas: {reservation.reservedSeats}</p>
              <button
                className="btn btn-primary"
                onClick={() => handleCancel(reservation.reservationId)}
              >
                Eliminar reserva
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Reservations;
