import React from "react";
import "./home.scss";
import Slider from "../../components/slider/Slider";
import FeatureProducts from "../../components/featuredproducts/FeatureProducts";
import Grid from "../../components/grid/Grid";
import Contact from "../../components/contact/Contact";
// import Sslider from "../../components/slider/Sslider";

const Home = () => {
  return (
    <div className="home">
      <Slider />
      {/* <Sslider /> */}
      <FeatureProducts type = "Featured"/>
      <Grid />
      <FeatureProducts type = "Trending"/>
      <Contact />
    </div>
  );
};

export default Home;
