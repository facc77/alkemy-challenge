import React from "react";
import "../css/card.css";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { agregarHeroeAction, borrarHeroeAction } from "../actions/heroeActions";
import Swal from "sweetalert2";
import PowerBar from "./PowerBar";

const Card = ({ hero, team, heroTeam }) => {
  let history = useHistory();
  const dispatch = useDispatch();
  const equipo = useSelector((state) => state.heroes.heroes);

  const agregarHeroe = (hero) => dispatch(agregarHeroeAction(hero));

  const handleAddition = (e) => {
    e.preventDefault();

    const heroInclination = (inclinacion) => {
      return equipo.reduce(
        (acc, cur) => (cur.biography.alignment === inclinacion ? ++acc : acc),
        0
      );
    };
    console.log(heroInclination(hero));
    //validar agregado
    if (equipo.length === 6) {
      Swal.fire({
        icon: "error",
        title: "El equipo está lleno",
        text: "El equipo ya tiene 6 miembros",
      });
      return;
    } else if (equipo.some((h) => h.id === hero.id)) {
      Swal.fire({
        icon: "error",
        title: "No se pudo agregar",
        text: "Este héroe ya se encuentra en tu equipo",
      });
      return;
    } else if (
      heroInclination("good") === 3 &&
      hero.biography.alignment === "good"
    ) {
      Swal.fire({
        icon: "error",
        title: "No se pudo agregar heroe",
        text: "El equipo ya tiene 3 miembros buenos",
      });
      return;
    } else if (
      heroInclination("bad") === 3 &&
      hero.biography.alignment === "bad"
    ) {
      Swal.fire({
        icon: "error",
        title: "No se pudo agregar heroe",
        text: "El equipo ya tiene 3 miembros malos",
      });
      return;
    } else {
      agregarHeroe(hero);
      history.push("/home");
    }
  };
  //sacar un heroe del equipo

  const handleSubtraction = (id) => {
    Swal.fire({
      title: "Estas seguro?",
      text: "El heroe saldrá del equipo!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, sácalo!",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(borrarHeroeAction(id));
      }
    });
  };

  const handleClick = () => {
    localStorage.setItem("hero", JSON.stringify(hero));
    history.push("/heroInfo");
  };
  return (
    <div className="card card-flip h-100">
      <div className="card-front text-white bg-dark">
        <div className="card-body">
          <img className="card-img-top" alt="heroImg" src={hero.image.url} />

          <div className="card-body">
            <h5 className="card-title">{hero.name}</h5>
          </div>
          {window.innerWidth < 768 ? (
            <div className="buttons">
              {team ? (
                <button
                  onClick={() => handleSubtraction(hero.id)}
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
              <button
                onClick={() => handleClick(hero.id)}
                className="btn btn-primary"
              >
                Detalles
              </button>
            </div>
          ) : null}
        </div>
      </div>
      <div className="card-back bg-dark">
        <div className="card-body mt-5">
          <PowerBar powerStats={hero.powerstats} heroTeam={heroTeam} />
          <div className="buttons mt-4">
            {team ? (
              <button
                onClick={() => handleSubtraction(hero.id)}
                href="#"
                className="btn btn-primary mr-1"
              >
                Sacar del equipo
              </button>
            ) : (
              <button
                onClick={handleAddition}
                href="#"
                className="btn btn-primary mr-1"
              >
                Agregar al equipo
              </button>
            )}
            <button
              onClick={() => handleClick()}
              className="btn btn-primary ml-1"
            >
              Detalles
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
