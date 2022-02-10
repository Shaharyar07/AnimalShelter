import React from "react";
import "../index.css";
import "../App.css";
import homepic from "../components/images/dog.jpeg";
const Home = () => {
  return (
    <div className="">
      <div className="d-flex align-item-center">
        <img
          src={homepic}
          alt="o ki hjaal challl auyy"
          id="homepic"
          className="homepic img-fluid w-100 "
        />
      </div>
    </div>
  );
};

export default Home;
