import React from "react";
import "./cards.scss";
import featureddata from "./FeaturedData";

const Cards = () => {
  return (
    <div className="cards">
      {featureddata.map((item) => {
        return (
          <div className="cardContainer" key={item.id}>
            <div className="image">
              {item.isNew && <span className="cardIsNew">New Season</span>}
              <img src={item.img} className="cardimg mainImg" />
              <img src={item.img2} className="cardimg secImg" />
            </div>
            {/* <img src={item.img2} className="cardimg"/> */}

            <div className="titleandprice">
              <h2 className="title">{item.title}</h2>
              <div className="price">
                <span className="oldprice">PKR {item.oldPrice}</span>
                <span className="newprice">PKR {item.newPrice}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
