import { useState, useEffect } from 'react';

import { Cards, CardData } from '../types';

const cards: Cards = [
  { img: 'rock.png', name: 'rock', color: 'red' },
  { img: 'paper.png', name: 'paper', color: 'blue' },
  { img: 'scissors.png', name: 'scissors', color: 'yellow' },
];

const pickRandomCard = (): CardData => {
  const randomCard = Math.floor(Math.random() * cards.length);
  return cards[randomCard];
};

type SetScore = (s: number) => number;

const validateAndUpdateScore = (
  player: string,
  comp: string,
  setStatus: (status: 'win' | 'draw' | 'lose') => void,
  setScore: (s: SetScore) => void
) => {
  if (player === comp) {
    setStatus('draw');
    setScore((s) => s + 1);
    return;
  }

  if (player === 'rock' && comp === 'scissors') {
    setStatus('win');
    setScore((s) => s + 2);
    return;
  } else if (player === 'paper' && comp === 'rock') {
    setStatus('win');
    setScore((s) => s + 2);
    return;
  } else if (player === 'scissors' && comp === 'paper') {
    setStatus('win');
    setScore((s) => s + 2);
    return;
  } else {
    setStatus('lose');
    setScore((s) => s - 2);
    return;
  }
};

type CheckWinner = {
  status: string;
  cards: Cards;
  score: number;
  playerPicked: CardData | null;
  setPlayerPicked: (p: null | CardData) => void;
  computerPicked: CardData | null;
};

export function useCheckWinner(): CheckWinner {
  const [status, setStatus] = useState('');
  const [score, setScore] = useState(0);
  const [playerPicked, setPlayerPicked] = useState<null | CardData>(null);
  const [computerPicked, setComputerPicked] = useState<null | CardData>(null);

  useEffect(() => {
    if (playerPicked !== null) {
      const pickedRandomCard = pickRandomCard();
      setComputerPicked(pickedRandomCard);

      validateAndUpdateScore(
        playerPicked.name,
        pickedRandomCard.name,
        setStatus,
        setScore
      );
    }
  }, [playerPicked]);

  return {
    status,
    cards,
    score,
    playerPicked,
    setPlayerPicked,
    computerPicked,
  };
}
