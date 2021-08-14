import React from "react";
import "../css/home.css";
import HeroTeam from "../components/HeroTeam";
import Buscador from "../components/Buscador";

const Home = () => {
  return (
    <>
      <div className="home">
        <h1>SuperHero Team</h1>
        <div className="section">
          <h1>Crea tu equipo de héroes!</h1>
          <Buscador />
          <HeroTeam />
        </div>
      </div>
    </>
  );
};

export default Home;
