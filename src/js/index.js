import React from "react";
import ReactDOM from "react-dom";
import "../styles/index.css";
import Home from "./component/home.jsx";



let counter = 1
setInterval(() => {
ReactDOM.render(<Home counter={counter}/>, document.querySelector("#app"));
counter += 1
},1000);