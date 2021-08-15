import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import "../css/heroCard.css";
import { useDispatch, useSelector } from "react-redux";

import { agregarHeroeAction } from "../actions/heroeActions";

const HeroCard = ({ hero, team }) => {
  let history = useHistory();
  const dispatch = useDispatch();
  const parametro = team;

  const agregarHeroe = (hero) => dispatch(agregarHeroeAction(hero));

  const handleAddition = (e) => {
    e.preventDefault();

    //validar agregado

    //si no hay errores

    //agregar nuevo heroe
    console.log(hero);
    agregarHeroe(hero);
    history.push("/home");
  };

  const handleSubtraction = (e) => {
    e.preventDefault();

    console.log("sacar heroe");
    //sacar un heroe del equipo
  };

  const handleClick = () => {
    console.log(hero);
    localStorage.setItem("hero", JSON.stringify(hero));
    history.push("/heroInfo");
  };

  return (
    <div className="card">
      <img className="card-img-top" src={hero.image.url} />

      <div className="card-body">
        <h5 className="card-title">{hero.name}</h5>

        <div className="buttons">
          {team ? (
            <button
              onClick={handleSubtraction}
              href="#"
              className="btn btn-primary "
            >
              Sacar del equipo
            </button>
          ) : (
            <button
              onClick={handleAddition}
              href="#"
              className="btn btn-primary "
            >
              Agregar al equipo
            </button>
          )}
          <button onClick={handleClick} className="btn btn-primary">
            Detalles
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
