import React from 'react';
import '../styles/DiscoverButton.css';

function DiscoverButton({ onClick, loading }) {
  return (
    <button className="discover-btn" onClick={onClick} disabled={loading}>
      {loading ? 'Loading...' : 'Discover Art!'}
    </button>
  );
}

export default DiscoverButton;
