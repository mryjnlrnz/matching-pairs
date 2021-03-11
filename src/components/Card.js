import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestion } from "@fortawesome/free-solid-svg-icons";

function Card({flip, cardClass, i, card}) {
  return (
    <div
      onClick={() => flip(i, card)}
      className={cardClass(i, card)}
    >
      <FontAwesomeIcon icon={cardClass(i, card) ? card : faQuestion} />
    </div>
  );
}

export default Card;