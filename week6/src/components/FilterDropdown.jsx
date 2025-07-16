import React from "react";

function FilterDropdown({ options, value, onChange, label }) {
  return (
    <label>
      {label}
      <select value={value} onChange={e => onChange(e.target.value)} className="filter-dropdown">
        <option value="">All</option>
        {options.map(opt => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </label>
  );
}

export default FilterDropdown; 