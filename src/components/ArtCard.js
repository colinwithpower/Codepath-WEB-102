import React from 'react';
import '../styles/ArtCard.css';

function ArtCard({ artwork, banList, onAttributeClick }) {
  if (!artwork) return null;

  const artist = artwork.people && artwork.people.length > 0 ? artwork.people[0].name : 'Unknown';
  const attributes = [
    { label: 'Artist', value: artist, type: 'artist' },
    { label: 'Culture', value: artwork.culture, type: 'culture' },
    { label: 'Period', value: artwork.period, type: 'period' },
    { label: 'Medium', value: artwork.medium, type: 'medium' },
    { label: 'Date', value: artwork.dated, type: null },
  ];

  return (
    <div className="art-card">
      <h2 className="art-title">{artwork.title}</h2>
      <div className="art-image-container">
        <img className="art-image" src={artwork.primaryimageurl} alt={artwork.title} />
      </div>
      <div className="art-attributes">
        {attributes.map((attr, idx) =>
          attr.type ? (
            <button
              key={attr.type + attr.value}
              className={`attribute-btn${banList[attr.type]?.includes(attr.value) ? ' banned' : ''}`}
              onClick={() => onAttributeClick(attr.type, attr.value)}
            >
              {attr.label}: {attr.value}
            </button>
          ) : (
            <span key={attr.label} className="attribute-label">
              {attr.label}: {attr.value}
            </span>
          )
        )}
      </div>
    </div>
  );
}

export default ArtCard;
