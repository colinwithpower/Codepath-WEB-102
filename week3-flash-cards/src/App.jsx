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
  const [userGuess, setUserGuess] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);
  const [feedback, setFeedback] = useState(null); // 'correct' | 'incorrect' | null
  const [currentStreak, setCurrentStreak] = useState(0);
  const [longestStreak, setLongestStreak] = useState(0);

  const currentCard = flashcards[index];
  const totalCards = flashcards.length;

  const handleInputChange = (e) => {
    setUserGuess(e.target.value);
    setFeedback(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const answer = currentCard.german.trim().toLowerCase();
    const guess = userGuess.trim().toLowerCase();
    if (guess === answer) {
      setFeedback('correct');
      setShowAnswer(true);
      const newStreak = currentStreak + 1;
      setCurrentStreak(newStreak);
      if (newStreak > longestStreak) setLongestStreak(newStreak);
    } else {
      setFeedback('incorrect');
      setShowAnswer(true);
      setCurrentStreak(0);
    }
  };

  const handleNext = () => {
    if (index < totalCards - 1) {
      setIndex(index + 1);
      setUserGuess("");
      setShowAnswer(false);
      setFeedback(null);
    }
  };

  const handlePrev = () => {
    if (index > 0) {
      setIndex(index - 1);
      setUserGuess("");
      setShowAnswer(false);
      setFeedback(null);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', padding: '0 20px' }}>
      <h1>German Vocabulary Flashcards</h1>
      <p style={{ fontSize: '18px', color: '#555' }}>
        This web app allows you to practice common German words by guessing the German translation!
      </p>
      <p><strong>Total Cards:</strong> {totalCards}</p>
      <p>Current Streak: {currentStreak}, Longest Streak: {longestStreak}</p>

      <div
        style={{
          margin: '30px auto',
          width: '320px',
          minHeight: '120px',
          border: '2px solid #444',
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '2rem',
          backgroundColor: feedback === 'correct' ? '#d4edda' : feedback === 'incorrect' ? '#f8d7da' : '#fefefe',
          color: '#222',
          boxShadow: '0 0 10px rgba(0,0,0,0.1)',
          transition: 'background 0.3s',
        }}
      >
        {!showAnswer ? currentCard.english : (
          <span><strong>{currentCard.german}</strong></span>
        )}
      </div>

      <form onSubmit={handleSubmit} style={{ margin: '20px auto', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', maxWidth: '350px' }}>
        <label htmlFor="guess-input" style={{ fontWeight: 'bold' }}>Guess the answer here:</label>
        <input
          id="guess-input"
          type="text"
          value={userGuess}
          onChange={handleInputChange}
          disabled={showAnswer}
          placeholder="Type your answer"
          style={{ padding: '6px', fontSize: '1rem', borderRadius: '4px', border: '1px solid #aaa' }}
        />
        <button type="submit" disabled={showAnswer || !userGuess.trim()} style={{ padding: '6px 12px', fontSize: '1rem', borderRadius: '4px', background: '#222', color: '#fff', border: 'none', cursor: showAnswer ? 'not-allowed' : 'pointer' }}>
          Submit Guess
        </button>
      </form>

      {feedback === 'correct' && showAnswer && (
        <div style={{ color: '#155724', fontWeight: 'bold', marginBottom: '10px' }}>Correct!</div>
      )}
      {feedback === 'incorrect' && showAnswer && (
        <div style={{ color: '#721c24', fontWeight: 'bold', marginBottom: '10px' }}>Incorrect. The answer is shown above.</div>
      )}

      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '20px' }}>
        <button onClick={handlePrev} disabled={index === 0} style={{ padding: '10px 20px', fontSize: '16px', borderRadius: '6px', background: index === 0 ? '#ccc' : '#222', color: '#fff', border: 'none', cursor: index === 0 ? 'not-allowed' : 'pointer' }}>
          ←
        </button>
        <button onClick={handleNext} disabled={index === totalCards - 1} style={{ padding: '10px 20px', fontSize: '16px', borderRadius: '6px', background: index === totalCards - 1 ? '#ccc' : '#222', color: '#fff', border: 'none', cursor: index === totalCards - 1 ? 'not-allowed' : 'pointer' }}>
          →
        </button>
      </div>
    </div>
  );
}

export default App;
