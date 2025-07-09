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

  // Fallback to images[0].baseimageurl if primaryimageurl is missing
  let imageUrl =
    artwork.primaryimageurl ||
    (artwork.images && artwork.images[0] && artwork.images[0].baseimageurl) ||
    '/placeholder.png';

  // Append ?height=400 for Harvard Art Museums images if not already present
  if (
    imageUrl.startsWith('https://nrs.harvard.edu/urn-3:huam:') &&
    !imageUrl.includes('?')
  ) {
    imageUrl += '?height=400';
  }
  console.log('Artwork image URL:', imageUrl);

  return (
    <div className="art-card">
      <h2 className="art-title">{artwork.title}</h2>
      <div className="art-image-container">
        <img
          className="art-image"
          src={imageUrl}
          alt={artwork.title}
          onError={e => { e.target.onerror = null; e.target.src = '/placeholder.png'; }}
        />
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
