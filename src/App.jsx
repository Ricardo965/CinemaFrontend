import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import Movies from "./pages/Movies";
import Reservations from "./pages/Reservations";
import Showtimes from "./pages/Showtimes";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<Showtimes />} />
          <Route path="/reservations" element={<Reservations />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
