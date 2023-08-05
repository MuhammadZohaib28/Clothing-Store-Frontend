import React, { useState } from "react";
import "./products.scss";
import List from "../../components/list/List";
import { useParams } from "react-router-dom";

const Products = () => {
  const categoryId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState(null);

  return (
    <div className="products">
      <div className="left">
        <div className="control-group">
          <h2 className="pcheading">Product Categories</h2>
          <label className="control control-checkbox">
            Trouser 
            <input type="checkbox" id="1" value={1}/>
            <div className ="control_indicator"></div>
          </label>
          <label className="control control-checkbox">
            Teez
            <input type="checkbox" id="2" value={2}/>
            <div className="control_indicator"></div>
          </label>
        </div>

        <div className="filterbyprice">
          <h2 className="fbpheading">Filter By Price</h2>
          <div className="range">
            <span>0</span>
            <input
              type="range"
              min={0}
              max={10000}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <span>{maxPrice}</span>
          </div>
        </div>

        <div className="rradio-group">
          <h2 className="rbheading">Sort By</h2>
          <label className="rradio rradio-radio">
            Price (Lowest First)
            <input
              type="radio"
              checked="checked"
              name="price"
              value="asc"
              id="asc"
              onChange={(e) => setSort("asc")}
            />
            <div className="rradio_indicator"></div>
          </label>
          <label className="rradio rradio-radio">
            Price (Highest First)
            <input
              type="radio"
              name="price"
              value="desc"
              id="desc"
              onChange={(e) => setSort("desc")}
            />
            <div className ="rradio_indicator"></div>
          </label>
        </div>
      </div>
      <div className="right">
        <img
          src="https://images.unsplash.com/photo-1682685797140-c17807f8f217?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          className="img"
        />
        <List categoryId = {categoryId} maxPrice = {maxPrice} sort = {sort}/>
      </div>
    </div>
  );
};

export default Products;
