import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-comida',
  templateUrl: './modal-comida.component.html',
  styleUrls: ['./modal-comida.component.css']
})
export class ModalComidaComponent {

  @Input() aberto: boolean = false;
  @Input() comida: any;

  @Output() fechar = new EventEmitter<void>();

  fecharModal() {
    this.fechar.emit();
  }
}