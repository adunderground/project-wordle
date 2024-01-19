import React from 'react';

function Guess({ guessResult }) {
  return (
    <>
      <p className="guess">
        {guessResult ? (
          guessResult.map(({ status, letter }, index) => (
            <span key={index} className={`cell ${status}`}>
              {letter}
            </span>
          ))
        ) : (
          <>
            <span className="cell"></span>
            <span className="cell"></span>
            <span className="cell"></span>
            <span className="cell"></span>
            <span className="cell"></span>
          </>
        )}
      </p>
    </>
  );
}

export default Guess;
