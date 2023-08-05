import React from "react";
import "./featuredproduct.scss";
import Cards from "../cards/Cards";
import Contact from "../contact/Contact";

const FeatureProducts = ({ type }) => {
  return (
    <div className="featuredproducts">
      <div className="fptop">
        <h1 className="heading">{type} Products</h1>
        <p className="para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quaerat
          nulla eligendi nobis fugit quae perspiciatis iste quos, pariatur illo
          deserunt possimus quia nam laboriosam, saepe, magni quisquam
          distinctio iure.
        </p>
      </div>
      <div className="fpbottom">
        <Cards />

      </div>
    </div>
  );
};

export default FeatureProducts;
