import { useState } from 'react';
import Card from './components/Card';
import CardPlayer from './components/CardPlayer';
import Status from './components/Status';
import { useCheckWinner } from './hooks/useCheckWinner';
import { CardData } from './types';

function App() {
  const [isPlay, setIsPlay] = useState(true);
  const {
    status,
    cards,
    score,
    playerPicked,
    setPlayerPicked,
    computerPicked,
  } = useCheckWinner();

  const handleClick = (data: CardData) => {
    setIsPlay(false);
    setPlayerPicked(data);
  };

  const handleReset = () => {
    setIsPlay(true);
    setPlayerPicked(null);
  };

  return (
    <div className="container">
      <div className="pannel">
        <div className="title">
          rock <br />
          paper <br />
          scissors
        </div>
        <div className="score">
          <p>score</p>
          <h2 className="score_text">{score}</h2>
        </div>
      </div>
      <div className="player_area">
        {isPlay ? (
          <div className="card_wrapper">
            {cards.map((card) => {
              return (
                <Card
                  data={card}
                  onClick={() => handleClick(card)}
                  key={card.name}
                />
              );
            })}
          </div>
        ) : (
          <div className="result_pannel">
            <CardPlayer cardData={playerPicked} name="you" />
            {computerPicked ? (
              <Status status={status} reset={handleReset} />
            ) : null}
            {computerPicked && (
              <CardPlayer cardData={computerPicked} name="computer" />
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
