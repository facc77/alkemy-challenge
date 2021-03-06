import React from "react";
import { Bar } from "react-chartjs-2";
import "../css/card.css";

const PowerBar = ({ powerStats, heroTeam }) => {
  const { intelligence, durability, combat, power, speed, strength } =
    powerStats;

  return (
    <div className={`statsContainer ${heroTeam ? "cardTeam" : null}`}>
      <Bar
        data={{
          labels: [
            "Combat",
            "Durability",
            "Intelligence",
            "Power",
            "Speed",
            "Strength",
          ],
          datasets: [
            {
              label: "power stats",
              data: [
                parseInt(combat),
                parseInt(durability),
                parseInt(intelligence),
                parseInt(power),
                parseInt(speed),
                parseInt(strength),
              ],
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
              ],
              borderWidth: 1,
            },
          ],
        }}
        height={400}
        width={600}
        options={{
          indexAxis: "y",
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
          legend: {
            labels: {
              font: { size: 50 },
            },
          },
        }}
      ></Bar>
    </div>
  );
};

export default PowerBar;
