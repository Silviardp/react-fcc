import React from "react";

function MainContent() {
  const date = new Date();
  const hours = date.getHours();
  let timeOfDay;

  if (hours < 12) {
    timeOfDay = "morning";
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon";
  } else {
    timeOfDay = "night";
  }

  const firstName = "Silvia";
  const lastName = "Rocha";

  return <h1>Good {`${timeOfDay} ${firstName} ${lastName}`}!</h1>;
}

export default MainContent;
