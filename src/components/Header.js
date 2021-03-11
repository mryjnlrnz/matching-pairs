import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRedo } from "@fortawesome/free-solid-svg-icons";

function Header({moves, resetGame}) {
  return (
    <header>
      <div>
        <p>Tries: {moves}</p>
        <button
          onClick={() => resetGame()}
        >
          <FontAwesomeIcon icon={faRedo} />
        </button>
      </div>
      
      <h3>Memory Game - Matching Pairs</h3>
    </header>
  );
}

export default Header;