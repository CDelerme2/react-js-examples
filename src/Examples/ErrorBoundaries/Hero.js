import React from "react";

function Hero({ heroName }) {
  if (heroName === "Joker") throw new Error("No jokers allowed.");
  return <div>{heroName}</div>;
}

export default Hero;
