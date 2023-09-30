import '../css/card.css';
import { CardData } from '../types';

type CardProp = {
  data: CardData | null;
  onClick?: () => void;
};

export default function Card({ data, onClick }: CardProp) {
  return (
    <div
      className="card_container"
      style={{ border: `10px solid ${data?.color}` }}
    >
      <button onClick={onClick}>
        <img src={`/assets/${data?.img}`} />
      </button>
    </div>
  );
}
