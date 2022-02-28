import React from "react";
// import  Image  from "../assets/Chef.jpeg";
import "../styles/About.css";
import Blog1 from "../assets/About_Us.jpeg";

function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${Blog1})` }}
      ></div>

      <div className="aboutBottom">
        <br></br>
        <br></br>
        <h1>ABOUT US</h1>
        <br></br>
        <br></br>
        <p>
          This blog is for anyone who loves to cook and for everyone who doesn’t. Indian cusines are rich in spices and their diversity in taste attracts people across the globe. Due to the differences in climate and soil conditions, the local cuisines in various regions may vary greatly from each other, as each region uses spices, herbs and ingredients that are grown locally.
          <br></br>
          We choice the top indian foods which are popular in the world and present their recipes at its simplest way of prparation. People who have like our recipes and want to contribute can contact us. We would love to have your opinion about our foods, best reviews gets featured in our review page.  
        </p>
        
        
      </div>
    </div>
  );
}

export default About;
