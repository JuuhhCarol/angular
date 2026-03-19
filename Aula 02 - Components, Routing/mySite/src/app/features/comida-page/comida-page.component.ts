import { Component } from '@angular/core';
import MockFood, { Icomidas } from './card-comida/comida.mock';

@Component({
  selector: 'app-comida-page',
  templateUrl: './comida-page.component.html',
  styleUrls: ['./comida-page.component.css']
})
export class ComidaPageComponent {
  protected produtos: Icomidas[] = [];

  constructor() {
    this.produtos = MockFood;
  }
}