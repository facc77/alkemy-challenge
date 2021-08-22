import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Card from "../components/Card";
import Header from "../components/Header";
import "../css/busqueda.css";

const Busqueda = () => {
  const busqueda = window.localStorage.getItem("busqueda");

  const [heroesInfo, setHeroesInfo] = useState("");
  const [error, setError] = useState("");
  let history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token === "") {
      history.push("/");
    }
  }, [history]);

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
    console.log(heroesInfo);
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Header login={true} />
      <div className="container">
        <h1>Resultado de busqueda</h1>
        <div className="card-container">
          {heroesInfo ? (
            heroesInfo.map((hero) => {
              return <Card key={hero.id} hero={hero} heroTeam={true} />;
            })
          ) : (
            <p>{error}</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Busqueda;
