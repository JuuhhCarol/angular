import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CpfInputComponent } from '../../components/cpf-input/cpf-input.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {

  constructor(private fb: FormBuilder, private router: Router) {}

  // Criando formulário com validação customizada
  form = this.fb.group({
    cpf: ['', [this.cpfValidator.bind(this)]] // conecta o validador
  });

  cpfValidator(control: any) {
    const cpfComponent = new CpfInputComponent();
    return cpfComponent.cpfValidator(control);
  }

  login() {
  if (this.form.valid) {
    // CPF válido → navegar para feed/posts
    this.router.navigate(['/feed']);
  }
}
}
