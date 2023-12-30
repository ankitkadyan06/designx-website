import React, { useState } from 'react';
import '../Assets/CSS/Founders.css'

const Main = () => {
    const [selectedCard, setSelectedCard] = useState(null);
    const [hoveredCard, setHoveredCard] = useState(null);

    const cards = [
        { id: 1, title: 'Rajat Srivastav, CEO', content: 'An enthusiast entrepreneur & visionary with an aim to digitalize and automate the manufacturing industry, combat wastages & up efficiencies.' },
        { id: 2, title: 'Nishant Srivastav, CTO', content: 'A strategic thinker with a strong business acumen, Nishant Srivastav is the tech leader. With business tech savvy skills, he foresees the path to success devising a digital strategy.' },
      ];

      const handleCardHover = (card) => {
        setSelectedCard(card);
      };

      const handleCardLeave = () => {
        setHoveredCard(null);
      };
    
      const handleCardClick = () => {
        setSelectedCard(hoveredCard);
      };
    
  return (
    <div>
      {cards.map((card) => (
        <div
          key={card.id}
          className={`card ${selectedCard === card ? 'selected' : hoveredCard === card ? 'hovered' : ''}`}
          onMouseEnter={() => handleCardHover(card)}
          onMouseLeave={handleCardLeave}
          onClick={handleCardClick}
        >
          <h3>{card.title}</h3>
          <p>{card.content}</p>
        </div>
      ))}
      <div className="selected-box">
        {selectedCard && (
          <>
            <h3>{selectedCard.title}</h3>
            <p>{selectedCard.content}</p>
          </>
        )}
      </div>
    </div>
);
};

export default Main
