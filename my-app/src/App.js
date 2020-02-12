import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import TodoItem from "./components/TodoItem";
import ContactCard from "./components/ContactCard";
import Joke from "./components/Joke";
import jokesData from "./jokesData";

function App() {
  const jokeComponents = jokesData.map(joke => {
    return (
      <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine} />
    );
  });
  // map returns a new array
  return <div>{jokeComponents}</div>;
}

export default App;
