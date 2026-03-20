import { Component } from '@angular/core';
import MockFood, { Icomidas } from './card-comida/comida.mock';

@Component({
  selector: 'app-comida-page',
  templateUrl: './comida-page.component.html',
  styleUrls: ['./comida-page.component.css']
})
export class ComidaPageComponent {

  produtos: Icomidas[] = [];

  modalAberto = false;
  comidaSelecionada!: Icomidas;

  constructor() {
    this.produtos = MockFood;
  }

  abrirModal(comida: Icomidas) {
    this.comidaSelecionada = comida;
    this.modalAberto = true;
  }

  fecharModal() {
    this.modalAberto = false;
  }
}
