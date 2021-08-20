import React from "react";
import { useSelector } from "react-redux";
import PowerBar from "../components/PowerBar";

const TeamStats = () => {
  const equipo = useSelector((state) => state.heroes.heroes);

  const equipoValue = equipo.map(function (h) {
    return h.powerstats;
  });

  const averageWeightCalc = equipo.map(function (h) {
    return h.appearance.weight[1].replace(/\D/g, "");
  });
  const averageWeight = Math.round(
    averageWeightCalc.reduce((a, b) => +a + +b, 0) / averageWeightCalc.length
  );

  const averageHeightCalc = equipo.map(function (h) {
    return h.appearance.height[1].replace(/\D/g, "");
  });
  const averageHeight = Math.round(
    averageHeightCalc.reduce((a, b) => +a + +b, 0) / averageHeightCalc.length
  );

  const powerStats = equipoValue.reduce((powerStats, stat) => {
    for (const [statName, statSum] of Object.entries(stat)) {
      if (!powerStats[statName]) {
        powerStats[statName] = 0;
      }
      powerStats[statName] += +statSum;
    }
    return powerStats;
  }, {});

  const maxStat = Object.keys(powerStats).reduce((a, b) =>
    powerStats[a] > powerStats[b] ? a : b
  );
  return (
    <div className="col-md-8 d-flex">
      <div className="col-md-6 align-items-center">
        <h3>Team Stats:</h3>
        <h4>Altura Promedio: {averageHeight} cm</h4>
        <h4>Peso Promedio: {averageWeight} kg</h4>
        <h4>Tipo de Equipo: {maxStat}</h4>
      </div>
      <div className="col-md-8">
        <PowerBar powerStats={powerStats} />
      </div>
    </div>
  );
};

export default TeamStats;
