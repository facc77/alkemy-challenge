import React, { useState, useEffect } from "react";
import axios from "axios";
import HeroCard from "../components/HeroCard";
import "../css/busqueda.css";

const Busqueda = () => {
  const busqueda = window.localStorage.getItem("busqueda");

  const [heroesInfo, setHeroesInfo] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `https://www.superheroapi.com/api.php/3028773887392050/search/${busqueda}/`
      );
      res.data.response === "success"
        ? setHeroesInfo(res.data.results)
        : setError(res.data.error);
    };
    fetchData();
    // eslint-disable-next-line
  }, [heroesInfo]);

  return (
    <>
      <h1>Resultado de busqueda</h1>
      <div className="card-container">
        {heroesInfo ? (
          heroesInfo.map((hero) => {
            return <HeroCard key={hero.id} hero={hero} />;
          })
        ) : (
          <p>{error}</p>
        )}
      </div>
    </>
  );
};

export default Busqueda;
