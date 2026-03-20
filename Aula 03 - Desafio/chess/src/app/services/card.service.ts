import { Injectable } from '@angular/core';

export interface Card {
  title: string;
  image: string;
}

@Injectable({ providedIn: 'root' })
export class CardService {

  private cards: Card[] = [
    { title: 'Card 1', image: 'https://picsum.photos/200/150?random=1' },
    { title: 'Card 2', image: 'https://picsum.photos/200/150?random=2' },
    { title: 'Card 3', image: 'https://picsum.photos/200/150?random=3' },
    { title: 'Card 4', image: 'https://picsum.photos/200/150?random=4' }
  ];

  getCards(): Card[] {
    return this.cards;
  }
}