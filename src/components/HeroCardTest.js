import React from "react";
import { useHistory } from "react-router-dom";
import "../css/heroCard.css";
import { useDispatch } from "react-redux";
import { agregarHeroeAction, borrarHeroeAction } from "../actions/heroeActions";
import Swal from "sweetalert2";

const HeroCardTest = ({ hero, team }) => {
  let history = useHistory();
  const dispatch = useDispatch();
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
    console.log(hero);
    localStorage.setItem("hero", JSON.stringify(hero));
    history.push("/heroInfo");
  };

  return (
    <>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img className="card-img-top" alt="heroImg" src={hero.image.url} />
            <div className="card-body">
              <h5 className="card-title">{hero.name}</h5>

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
                <button onClick={handleClick} className="btn btn-primary">
                  Detalles
                </button>
              </div>
            </div>
          </div>
          <div className="flip-card-back">
            <h1>John Doe</h1>
            <p>Architect & Engineer</p>
            <p>We love that guy</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroCardTest;
