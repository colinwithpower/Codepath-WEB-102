import React from 'react';
import '../styles/BanList.css';

function BanList({ banList, onRemove }) {
  const types = Object.keys(banList);
  const hasBans = types.some((type) => banList[type].length > 0);

  return (
    <div className="ban-list">
      <h3>Ban List</h3>
      {!hasBans && <div className="ban-empty">No banned attributes.</div>}
      {types.map((type) =>
        banList[type].length > 0 ? (
          <div key={type} className="ban-group">
            <span className="ban-type">{type.charAt(0).toUpperCase() + type.slice(1)}:</span>
            {banList[type].map((value) => (
              <button
                key={value}
                className="ban-btn"
                onClick={() => onRemove(type, value)}
              >
                {value} ✕
              </button>
            ))}
          </div>
        ) : null
      )}
    </div>
  );
}

export default BanList;
