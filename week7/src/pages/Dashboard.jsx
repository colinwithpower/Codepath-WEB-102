import React, { useEffect, useState } from "react";
import { fetchCats } from "../utils/fetchCats";
import CatCard from "../components/CatCard";
import SearchBar from "../components/SearchBar";
import FilterDropdown from "../components/FilterDropdown";
import { Link } from "react-router-dom";
import "../styles/Dashboard.css";
import BreedDistributionChart from "../components/Charts/BreedDistributionChart";
import WidthByBreedChart from "../components/Charts/WidthByBreedChart";

function Dashboard() {
  const [cats, setCats] = useState([]);
  const [search, setSearch] = useState("");
  const [breed, setBreed] = useState("");
  const [breeds, setBreeds] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadCats() {
      setLoading(true);
      const data = await fetchCats({ limit: 20, breed });
      setCats(data);
      setLoading(false);
    }
    loadCats();
  }, [breed]);

  useEffect(() => {
    async function loadBreeds() {
      const res = await fetch("https://api.thecatapi.com/v1/breeds");
      const breeds = await res.json();
      setBreeds(breeds);
    }
    loadBreeds();
  }, []);

  const filteredCats = cats.filter(cat => {
    const breedName = cat.breeds?.[0]?.name?.toLowerCase() || "";
    return breedName.includes(search.toLowerCase());
  });

  // Summary statistics
  const total = filteredCats.length;
  const uniqueBreeds = new Set(filteredCats.map(cat => cat.breeds?.[0]?.name)).size;
  const avgWidth = filteredCats.length ? Math.round(filteredCats.reduce((sum, c) => sum + c.width, 0) / filteredCats.length) : 0;

  // Prepare data for charts
  const breedCounts = {};
  const breedWidths = {};
  filteredCats.forEach(cat => {
    const breedName = cat.breeds?.[0]?.name || "Unknown";
    breedCounts[breedName] = (breedCounts[breedName] || 0) + 1;
    breedWidths[breedName] = breedWidths[breedName] || [];
    breedWidths[breedName].push(cat.width);
  });
  const breedDistributionData = Object.entries(breedCounts).map(([breed, count]) => ({ breed, count }));
  const widthByBreedData = Object.entries(breedWidths).map(([breed, widths]) => ({
    breed,
    avgWidth: Math.round(widths.reduce((a, b) => a + b, 0) / widths.length)
  }));

  return (
    <div className="dashboard">
      <div className="dashboard-summary">
        <strong>Summary:</strong> {total} cats, {uniqueBreeds} breeds, avg width: {avgWidth}px
      </div>
      <div className="dashboard-search">
        <SearchBar value={search} onChange={setSearch} />
      </div>
      <div className="dashboard-filter">
        <FilterDropdown
          label="Filter by breed: "
          value={breed}
          onChange={setBreed}
          options={breeds.map(b => ({ value: b.id, label: b.name }))}
        />
      </div>
      <div className="dashboard-charts">
        <h3>Breed Distribution</h3>
        <BreedDistributionChart data={breedDistributionData} />
        <h3>Average Cat Width by Breed</h3>
        <WidthByBreedChart data={widthByBreedData} />
      </div>
      <div className="dashboard-list">
        {loading ? "Loading..." : filteredCats.map(cat => (
          <Link key={cat.id} to={`/cat/${cat.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <CatCard cat={cat} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Dashboard; 