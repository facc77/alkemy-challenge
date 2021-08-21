import React, { useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import PowerBar from "../components/PowerBar";
import Header from "../components/Header";
import "../css/heroInfo.css";

const HeroInfo = () => {
  const hero = JSON.parse(window.localStorage.getItem("hero"));
  let history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token === "") {
      history.push("/");
    }
  }, [history]);

  return (
    <>
      <Header login={true} />
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-4">
            <div className="header-content-left">
              <img src={hero.image.url} alt="heroImg" className="heroImg" />
            </div>
          </div>
          <div className="col-md-6 mt-4">
            <div className="header-content-right">
              <h1 className="display-4">{hero.name}</h1>
              <h6 className="display-12">{`Aliases: ${hero.biography[
                "aliases"
              ].join(",")}`}</h6>
              <p className="mt-2">
                <ul>
                  <li>Peso : {hero.appearance.weight[1]}</li>
                  <li>Altura : {hero.appearance.height[1]}</li>
                  <li>Color de ojos : {hero.appearance["eye-color"]}</li>
                  <li>Color de cabello : {hero.appearance["hair-color"]}</li>
                  <li>Lugar de trabajo : {hero.work.base}</li>
                </ul>
              </p>
              <div className="row">
                <div className="col-6">
                  <PowerBar powerStats={hero.powerstats} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroInfo;
