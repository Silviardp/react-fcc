import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import TodoItem from "./components/TodoItem";
import ContactCard from "./components/ContactCard";

function App() {
  return (
    <div className="todo-list">
      <ContactCard
        contact={{
          name: "Mr. Whiskerson",
          imgUrl: "http://placekitten.com/300/200",
          phone: "(212) 555-1234",
          email: "mr.whiskaz@catnap.meow"
        }}
      />
      <ContactCard
        contact={{
          name: "Fluffykins",
          imgUrl: "http://placekitten.com/400/200",
          phone: "(212) 555-2345",
          email: "fluff@me.com"
        }}
      />
      <ContactCard
        contact={{
          name: "Destroyer",
          imgUrl: "http://placekitten.com/400/300",
          phone: "(212) 555-3456",
          email: "ofworlds@yahoo.com"
        }}
      />
      <ContactCard
        contact={{
          name: "Felix",
          imgUrl: "http://placekitten.com/200/100",
          phone: "(212) 555-4567",
          email: "thecat@hotmail.com"
        }}
      />
    </div>
  );
}

export default App;
