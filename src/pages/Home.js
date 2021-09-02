import React, { useEffect } from "react";
import "../css/home.css";
import { useSelector } from "react-redux";
import HeroTeam from "../components/HeroTeam";
import { useHistory } from "react-router-dom";
import Buscador from "../components/Buscador";
import TeamStats from "../components/TeamStats";
import Header from "../components/Header";

const Home = () => {
  const equipo = useSelector((state) => state.heroes.heroes);
  let history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token === "") {
      history.push("/redirect");
    }
  }, [history]);

  return (
    <>
      <Header login={true} />
      <div className="home">
        <div className="section">
          <h1>Crea tu equipo de héroes!</h1>
          <div className="container mt-4">
            <div className="row">
              <div className="col-md-12">
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
