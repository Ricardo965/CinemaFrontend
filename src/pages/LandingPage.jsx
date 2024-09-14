import React from "react";

const LandingPage = () => {
  return (
    <div className="container text-center">
      <h1 className="my-4">¡Bienvenido al cine!</h1>
      <p className="lead">
        Descubre nuestras películas, reserva tus boletos y disfruta de la
        experiencia.
      </p>
      <div className="overflow-hidden">
        <img
          src="https://www.elblogoferoz.com/wp-content/uploads/2023/10/2849a145ee8da283aa408220b1f1b26b30ec2922.jpg"
          alt="Cine"
          className="w-full max-w-screen-lg h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default LandingPage;
