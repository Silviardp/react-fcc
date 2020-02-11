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

  const styles = {
    color: "red",
    backgroundColor: "blue",
    fontSize: 50
  };

  return (
    <h1 style={styles}>Good {`${timeOfDay} ${firstName} ${lastName}`}!</h1>
  );
}

export default MainContent;
