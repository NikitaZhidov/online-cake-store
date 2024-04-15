import { CardItem } from './card-item';

export interface Order {
  cardItems: CardItem[];
  date: Date;
}
