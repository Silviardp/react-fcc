import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

// ReactDOM.render(<App />, document.getElementById("root"));

function MyInfo() {
  return (
    <div>
      <h1>Silvia</h1>
      <p>This is a description of me</p>
      <ul>
        <li>Korea</li>
        <li>Japan</li>
        <li>Brazil</li>
      </ul>
    </div>
  );
}

ReactDOM.render(<MyInfo />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
