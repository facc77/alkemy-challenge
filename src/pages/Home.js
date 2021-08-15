import React from "react";
import "../css/home.css";
import HeroTeam from "../components/HeroTeam";
import Buscador from "../components/Buscador";

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="section">
          <h1>Crea tu equipo de héroes!</h1>
          <Buscador />

          <div className="card-container color-black">
            <HeroTeam />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
