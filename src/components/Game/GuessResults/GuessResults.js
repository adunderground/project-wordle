import React from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../../../constants';
import { range } from '../../../utils';
import { checkGuess } from '../../../game-helpers';

import Guess from './Guess';

function GuessResults({ guesses, answer }) {
  // produces an array size of NUM_OF_GUESSES_ALLOWED with elements from [0 to NUM_OF_GUESSES_ALLOWED - 1]
  // e.g. [0, 1, 2, 3, 4, 5]

  const slots = range(NUM_OF_GUESSES_ALLOWED);

  return (
    <div className="guess-results">
      {slots.map((index) => (
        <Guess key={index} guessResult={checkGuess(guesses[index], answer)} />
      ))}
    </div>
  );
}

export default GuessResults;
