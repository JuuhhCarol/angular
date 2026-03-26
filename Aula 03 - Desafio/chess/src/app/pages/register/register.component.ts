import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  cpfValido: boolean = false;

  constructor(private router: Router) {}

  receberValidacao(valido: boolean) {
    this.cpfValido = valido;
  }

  entrar() {
    if (!this.cpfValido) {
      alert('CPF inválido');
      return;
    }

    // Redireciona para o feed
    this.router.navigate(['/feed']);
  }
}