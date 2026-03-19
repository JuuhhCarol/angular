import { Component } from '@angular/core';
import MockProdutos, { Iprodutos } from './card-mercado/produts.mock'; // caminho do mock

@Component({
  selector: 'app-mercado-page',
  templateUrl: './mercado-page.component.html',
  styleUrls: ['./mercado-page.component.css']
})
export class MercadoPageComponent {
  protected produtos: Iprodutos[] = [];

  constructor() {
    this.produtos = MockProdutos;
  }
}
