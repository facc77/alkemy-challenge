import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import "../css/heroCard.css";

const HeroCard = ({ hero }) => {
  useEffect(() => {
    console.log(hero);
  }, []);

  let history = useHistory();

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
          <button href="#" className="btn btn-primary ">
            Agregar al equipo
          </button>
          <button onClick={handleClick} className="btn btn-primary">
            Detalles
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
