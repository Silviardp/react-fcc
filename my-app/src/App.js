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

/*
Given a list of products (as an array of objects, as seen in productsData.js)
render a <Product /> component (which you'll also need to create) for each
product in the list.

Make sure to use the array's `.map()` method to create these components, and
don't forget to pass a `key` prop to it to avoid the warning.
*/

import products from "./vschoolProducts";
import Product from "./components/Product";

function App() {
  const productComponents = products.map(item => {
    return <Product key={item.id} product={item} />;
  });

  return <div>{productComponents}</div>;
}

export default App;
