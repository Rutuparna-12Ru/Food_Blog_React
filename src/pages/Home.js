import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/BackGround.jpeg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1 style={{ fontWeight: "bold" }}> A Bite of Yummy </h1>
        <br></br>
        <br></br>
        <p>INDIAN FOOD RECIPES</p>
        <Link to="/recipe">
          <button>Read Recipes </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
