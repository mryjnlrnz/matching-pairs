import React, { useState, useEffect } from "react";
import {
  faAngular,
  faGithub,
  faNodeJs,
  faPhp,
  faReact,
  faVuejs
} from "@fortawesome/free-brands-svg-icons";
import './App.scss';
import Header from "./components/Header";
import Card from "./components/Card";

const cardsArray = [
  faReact,
  faReact,
  faAngular,
  faAngular,
  faVuejs,
  faVuejs,
  faNodeJs,
  faNodeJs,
  faGithub,
  faGithub,
  faPhp,
  faPhp,
];

function App() {
  const [cards, setCards] = useState([]);
  const [cardsToMatch, setCardsToMatch] = useState([]);
  const [matchedCard, setMatchedCard] = useState([]); // solved cards
  const [moves, setMoves] = useState(0);
  const [gameWon, setGameWon] = useState(false);
  
  // shuffle cards on load
  useEffect(() => {
    setCards(shuffle(cardsArray));
  }, []);

  // shuffle array of cards
  const shuffle = cards => {
    return cards.sort(() => Math.random() - 0.5);
  }

  const flip = (i, card) => {
    let openedCards = [...cardsToMatch];
    const isCurrentlyOpened = openedCards.some(card => card.id === i);
    
    if (isCurrentlyOpened || matchedCard.includes(card)) return;

    if (openedCards.length === 2) openedCards = [];

    openedCards.push({
      id: i,
      name: card
    });
    setCardsToMatch(openedCards);

    // compare two cards
    if (openedCards.length === 2) compare(openedCards);
  }

  const compare = (openedCards) => {
    const solvedCards = matchedCard;

    incrementMoves();

    // is execute if two cards are the same
    if (openedCards[0].name === openedCards[1].name) {
      solvedCards.push(openedCards[0].name);
      setMatchedCard(solvedCards);
      setCardsToMatch([]);
    }
    
    if (matchedCard.length === (cards.length / 2)) setGameWon(true);
  }

  const incrementMoves = () => setMoves(moves + 1);

  const resetGame = () => {
    setMoves(0);
    setCards(shuffle(cardsArray));
    setCardsToMatch([]);
    setMatchedCard([]);
    setGameWon(false);
  }

  const cardClass = (i, card) =>  {
    if (matchedCard.includes(card)) return 'flip matched';
    if (cardsToMatch.some(cardToMatch => cardToMatch.id === i)) return 'flip open';
  }

  return (
    <div className={`App ${gameWon ? 'game-won' : ''}`}>
      
      <Header
        moves={moves}
        resetGame={resetGame}
      />

      {/* card section */}
      <section className="cards-container">
        {
          cards.map((card, i) => (
            <Card
              key={i}
              flip={flip}
              cardClass={cardClass}
              i={i}
              card={card}
            />
          ))
        }
      </section>

      {/* Game won section */}
      <section className="congrats">You won the game</section>

    </div>
  );
}

export default App;
