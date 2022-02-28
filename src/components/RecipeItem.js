import React from "react";

function RecipeItem({ image, name, about, source_url}) {
  return (
    <div className="recipeItem">
      <div className="" style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <p>{about}</p>
      <button>
      <a
                  href={source_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-success mt-2 mx-3 text-capitalize"
                >
                  Recipe Url
      </a>
      </button>
    </div>
  );
}


export default RecipeItem;

