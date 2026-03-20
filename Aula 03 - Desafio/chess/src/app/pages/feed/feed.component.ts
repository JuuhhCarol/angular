import { Component, OnInit } from '@angular/core';
import { CardService, Card } from '../../services/card.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html'
})
export class FeedComponent implements OnInit {

  cards: Card[] = [];

  constructor(private cardService: CardService) {}

  ngOnInit(): void {
    this.cards = this.cardService.getCards();
  }
}