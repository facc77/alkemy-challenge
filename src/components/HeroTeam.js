import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { obtenerHeroesAction } from "../actions/heroeActions";
import HeroCard from "./HeroCard";

const HeroTeam = () => {
  const equipo = useSelector((state) => state.heroes.heroes);
  const cargando = useSelector((state) => state.heroes.loading);

  const equipo1 = [];
  const dispatch = useDispatch();

  useEffect(() => {
    const cargarHeroes = () => dispatch(obtenerHeroesAction());
    cargarHeroes();
  }, []);

  return cargando ? (
    <div className="container">
      <p className="alert alert-danger p-2 text-center mt-5">cargando</p>
    </div>
  ) : equipo.length !== 0 ? (
    equipo.map((hero) => {
      return <HeroCard key={hero.id} hero={hero} team={true} />;
    })
  ) : (
    <div className="container mt-5">
      <p className="alert alert-danger text-center font-weight-bold">
        el equipo no existe aún
      </p>
    </div>
  );
};

export default HeroTeam;
