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
import products from "./vschoolProducts";
import Product from "./components/Product";
import todosData from "./todosData";

function App() {
  const todoItems = todosData.map(item => (
    <TodoItem key={item.id} item={item} />
  ));
  return <div className="todo-list">{todoItems}</div>;
}

export default App;
