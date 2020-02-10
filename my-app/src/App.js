import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <nav>
        <h1>Hello again!</h1>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </nav>
      <main>
        <p>This is where most of my content will go</p>
      </main>
      <Footer />
    </div>
  );
}

export default App;
