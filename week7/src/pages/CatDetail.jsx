import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCats } from "../utils/fetchCats";

function CatDetail() {
  const { catId } = useParams();
  const [cat, setCat] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadCat() {
      setLoading(true);
      const data = await fetchCats({ id: catId });
      setCat(data[0]);
      setLoading(false);
    }
    loadCat();
  }, [catId]);

  if (loading) return <div>Loading...</div>;
  if (!cat) return <div>Cat not found.</div>;

  const breed = cat.breeds?.[0];

  return (
    <div className="cat-detail">
      <h2>{breed ? breed.name : "Unknown Breed"}</h2>
      <img src={cat.url} alt={breed ? breed.name : "Cat"} style={{ maxWidth: 400 }} />
      {breed && (
        <div>
          <p><strong>Origin:</strong> {breed.origin}</p>
          <p><strong>Temperament:</strong> {breed.temperament}</p>
          <p><strong>Description:</strong> {breed.description}</p>
        </div>
      )}
      <p><strong>Width:</strong> {cat.width}px</p>
      <p><strong>Height:</strong> {cat.height}px</p>
    </div>
  );
}

export default CatDetail;
