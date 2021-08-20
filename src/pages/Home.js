import React, { useEffect } from "react";
import "../css/home.css";
import { useSelector } from "react-redux";
import HeroTeam from "../components/HeroTeam";
/* import HeroCardTest from "../components/HeroCardTest";
import Card from "../components/Card"; */
import { useHistory } from "react-router-dom";
import Buscador from "../components/Buscador";
import TeamStats from "../components/TeamStats";

const Home = () => {
  const equipo = useSelector((state) => state.heroes.heroes);
  let history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token === "") {
      history.push("/");
    }
  }, [history]);

  return (
    <>
      <div className="home">
        <div className="section">
          <h1>Crea tu equipo de héroes!</h1>
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <Buscador />
              </div>
              {equipo.length !== 0 ? <TeamStats /> : null}
            </div>
          </div>

          <div className="card-container color-black">
            <HeroTeam />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
