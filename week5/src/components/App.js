import React, { useEffect, useState } from 'react';
import { fetchRandomArtwork } from '../api/artApi';
import ArtCard from './ArtCard';
import BanList from './BanList';
import DiscoverButton from './DiscoverButton';
import '../styles/App.css';

const initialBanList = {
  artist: [],
  culture: [],
  period: [],
  medium: [],
};

function App() {
  const [artwork, setArtwork] = useState(null);
  const [banList, setBanList] = useState(initialBanList);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Fetch artwork on mount
  useEffect(() => {
    getArtwork();
    // eslint-disable-next-line
  }, []);

  const getArtwork = async () => {
    setLoading(true);
    setError('');
    try {
      const art = await fetchRandomArtwork(banList);
      if (art) {
        setArtwork(art);
      } else {
        setError('No artwork found. Try removing some bans or try again.');
        setArtwork(null);
      }
    } catch (err) {
      setError('Failed to fetch artwork.');
      setArtwork(null);
    }
    setLoading(false);
  };

  // Add or remove attribute from ban list
  const toggleBan = (type, value) => {
    setBanList((prev) => {
      const isBanned = prev[type].includes(value);
      return {
        ...prev,
        [type]: isBanned
          ? prev[type].filter((v) => v !== value)
          : [...prev[type], value],
      };
    });
  };

  // When banList changes, fetch new artwork
  useEffect(() => {
    if (artwork) getArtwork();
    // eslint-disable-next-line
  }, [banList]);

  return (
    <div className="app-container">
      <h1>Random Art Explorer</h1>
      <DiscoverButton onClick={getArtwork} loading={loading} />
      {error && <div className="error">{error}</div>}
      {artwork && (
        <ArtCard artwork={artwork} banList={banList} onAttributeClick={toggleBan} />
      )}
      <BanList banList={banList} onRemove={toggleBan} />
    </div>
  );
}

export default App;
