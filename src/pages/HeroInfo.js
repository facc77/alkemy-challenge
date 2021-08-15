import React, { useEffect } from "react";
import PowerBar from "../components/PowerBar";
import "../css/heroInfo.css";

const HeroInfo = () => {
  const hero = JSON.parse(window.localStorage.getItem("hero"));

  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col-md-6 mt-4">
            <div class="header-content-left">
              <img src={hero.image.url} className="heroImg" />
            </div>
          </div>
          <div class="col-md-6 mt-4">
            <div class="header-content-right">
              <h1 class="display-4">{hero.name}</h1>
              <h6 class="display-12">{`Aliases: ${hero.biography[
                "aliases"
              ].join(",")}`}</h6>
              <p class="mt-2">
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
                <div className="col-6 d-flex justify-content-center align-items-center">
                  <button className="btn btn-primary">agregar Heroe</button>
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
