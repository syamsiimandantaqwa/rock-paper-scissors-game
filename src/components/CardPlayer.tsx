import Card from './Card';
import '../css/cardPlayer.css';
import { CardData } from '../types';

type CardPlayerProp = {
  cardData: CardData | null;
  name: string;
};

export default function CardPlayer({ cardData, name }: CardPlayerProp) {
  return (
    <div className="card_player">
      <h1 className="name">{name} picked</h1>
      <div>
        <Card data={cardData} />;
      </div>
    </div>
  );
}
