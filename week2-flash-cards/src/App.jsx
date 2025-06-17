import React, { useState } from 'react';
import './App.css';

const flashcards = [
  { english: "apple", german: "Apfel" },
  { english: "book", german: "Buch" },
  { english: "house", german: "Haus" },
  { english: "cat", german: "Katze" },
  { english: "dog", german: "Hund" },
  { english: "water", german: "Wasser" },
  { english: "bread", german: "Brot" },
  { english: "friend", german: "Freund" },
  { english: "school", german: "Schule" },
  { english: "car", german: "Auto" },
  { english: "sun", german: "Sonne" },
  { english: "moon", german: "Mond" },
  { english: "tree", german: "Baum" },
  { english: "window", german: "Fenster" },
  { english: "city", german: "Stadt" },
  { english: "love", german: "Liebe" },
  { english: "music", german: "Musik" },
  { english: "family", german: "Familie" },
  { english: "table", german: "Tisch" },
  { english: "milk", german: "Milch" },
];

function App() {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const currentCard = flashcards[index];
  const totalCards = flashcards.length;

  const handleNext = () => {
    const nextIndex = Math.floor(Math.random() * flashcards.length);
    setIndex(nextIndex);
    setFlipped(false);
  };

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', padding: '0 20px' }}>
      <h1>German Vocabulary Flashcards</h1>

      <p style={{ fontSize: '18px', color: '#555' }}>
        This web app allows you to practice common German words by flipping between English and German!
      </p>

      <p><strong>Total Cards:</strong> {totalCards}</p>

      <div
        onClick={handleFlip}
        style={{
          margin: '30px auto',
          width: '320px',
          height: '180px',
          border: '2px solid #444',
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '2rem',
          cursor: 'pointer',
          backgroundColor: '#fefefe',
          boxShadow: '0 0 10px rgba(0,0,0,0.1)',
        }}
      >
        {flipped ? currentCard.german : currentCard.english}
      </div>

      
      <button onClick={handleNext} style={{ padding: '10px 20px', fontSize: '16px' }}>
        Next Word
      </button>
    </div>
  );
}

export default App;
