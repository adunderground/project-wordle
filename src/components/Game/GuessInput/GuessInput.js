import React, { useState } from 'react';

function GuessInput({ guesses, setGuesses, isDisabled }) {
  const [userGuess, setUserGuess] = useState('');

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(e) => {
        e.preventDefault();
        setUserGuess('');
        setGuesses([...guesses, userGuess]);
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={userGuess}
        maxLength={5}
        minLength={5}
        pattern="[A-Z]{5}"
        disabled={isDisabled}
        onChange={(e) => setUserGuess(e.target.value.toUpperCase())}
      />
    </form>
  );
}

export default GuessInput;
