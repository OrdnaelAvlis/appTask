// Pricipais imports
import React, { useState, useEffect } from "react"; // Esta declarada mas não esta sendo usado ainda.
import ReactDOM from "react-dom/client";

// imports css
import "./Style.css";
import { NavBar } from "./Nav";
import { Button } from "./Button";
import { Users } from "./Users";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <div className="bgContainer">
      <NavBar />

      <Button text="Pay Card" />
      <Button text="" />
      <Button text="" />
    </div>
  </>
);
