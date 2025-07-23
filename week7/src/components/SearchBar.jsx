import React from "react";

function SearchBar({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Search cats by breed..."
      value={value}
      onChange={e => onChange(e.target.value)}
      className="search-bar"
    />
  );
}

export default SearchBar; 