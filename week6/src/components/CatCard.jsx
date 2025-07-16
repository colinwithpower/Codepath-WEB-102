import React from "react";

function CatCard({ cat }) {
  const breed = cat.breeds && cat.breeds[0];
  return (
    <div className="cat-card">
      <img src={cat.url} alt={breed ? breed.name : "Cat"} width={200} />
      <div className="cat-info">
        <h3>{breed ? breed.name : "Unknown Breed"}</h3>
        {breed && <p>Origin: {breed.origin}</p>}
      </div>
    </div>
  );
}

export default CatCard; 