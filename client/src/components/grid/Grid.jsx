import React from "react";
import "./grid.scss";
import { Link } from "react-router-dom";

const Grid = () => {
  return (
    <div class="parent">
      <div class="div1">
        <Link to={"./products/2"}>
          <button className="gridbtn">Gentle Men</button>
        </Link>
      </div>
      <div class="div2">
        <Link to={"./products/2"}>
          <button className="gridbtn">Respected Woman</button>
        </Link>
      </div>
      <div class="div3">
        <Link to={"./products/2"}>
          <button className="gridbtn">Children</button>
        </Link>
      </div>
      <div class="div4">
        <Link to={"./products/2"}>
          <button className="gridbtn">Genziees</button>
        </Link>
      </div>
      <div class="div5">
        <Link to={"./products/2"}>
          <button className="gridbtn">Teez</button>
        </Link>
      </div>
      <div class="div6">
        <Link to={"./products/2"}>
          <button className="gridbtn">Bottom</button>
        </Link>
      </div>
    </div>
  );
};

export default Grid;
