import { Injectable } from '@angular/core';

export interface Card {
  title: string;
  image: string;
}

@Injectable({ providedIn: 'root' })
export class CardService {
  private cards: Card[] = []; 

  getCards(): Card[] {
    return this.cards;
  }

  addCard(card: Card) {
    this.cards.push(card);
  }
}