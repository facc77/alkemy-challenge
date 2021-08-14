import React, { useState } from "react";

const HeroTeam = () => {
  const [equipo, setEquipo] = useState(false);

  return equipo ? <h1>team</h1> : <h1>the team doesn't exist yet!</h1>;
};

export default HeroTeam;
