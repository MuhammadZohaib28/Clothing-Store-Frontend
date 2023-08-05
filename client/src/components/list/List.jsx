import React from "react";
import "./list.scss";
import featureddata from "./FeaturedData";
import Cards from "../cards/Cards";

const List = () => {
  return (
    <div className="list">
      {featureddata.map((item) => {
        return <Cards item = {item} key={item.id}/>
      })}
    </div>
  );
};

export default List;
