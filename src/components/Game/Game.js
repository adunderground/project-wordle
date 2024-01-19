import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import GuessInput from './GuessInput';
import GuessResults from './GuessResults';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);

  const isGameOver =
    guesses.length === NUM_OF_GUESSES_ALLOWED || guesses.includes(answer);

  const isWin = guesses.includes(answer);

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput
        guesses={guesses}
        setGuesses={setGuesses}
        isDisabled={isGameOver}
      />

      {isGameOver && (
        <>
          {isWin ? (
            <div className="happy banner ">
              <p>
                <strong>Congratulations!</strong> Got it in
                <strong>{guesses.length} guesses</strong>.
              </p>
            </div>
          ) : (
            <div className="sad banner">
              <p>
                Sorry, the correct answer is <strong>{answer}</strong>.
              </p>
            </div>
          )}
        </>
      )}
    </>
  );
}

export default Game;
