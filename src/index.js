//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.
import React from "react";
import ReactDOM from "react-dom";

const YOURNAME = "mohamed";
const Copyright_date = new Date();
const Copyright_year = Copyright_date.getFullYear();

ReactDOM.render(
  <div>
    <p>{YOURNAME}</p>
    <p>{Copyright_year}</p>
  </div>,

  document.getElementById("root")
);
