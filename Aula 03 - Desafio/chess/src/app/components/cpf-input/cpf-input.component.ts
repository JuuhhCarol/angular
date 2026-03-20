import { Component } from '@angular/core';

// Importações necessárias para validação de formulários
import { AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-cpf-input', // Nome da tag usada no HTML
  templateUrl: './cpf-input.component.html'
})
export class CpfInputComponent {

  // 🔹 FUNÇÃO PRINCIPAL DE VALIDAÇÃO (Angular usa essa função)
  cpfValidator(control: AbstractControl): ValidationErrors | null {

    // Pega o valor digitado no input
    const cpf = control.value;

    // Se o campo estiver vazio, não valida ainda (evita erro precoce)
    if (!cpf) return null;

    // Chama a função que valida o CPF de verdade
    const isValid = this.validateCPF(cpf);

    // Se for válido → retorna null
    // Se for inválido → retorna um objeto de erro
    return isValid ? null : { cpfInvalid: true };
  }

  // 🔹 FUNÇÃO QUE CONTÉM A REGRA REAL DO CPF
  validateCPF(cpf: string): boolean {

    // Remove tudo que não for número
    cpf = cpf.replace(/\D/g, '');

    // CPF precisa ter exatamente 11 números
    if (cpf.length !== 11) return false;

    // Elimina CPFs inválidos conhecidos (ex: 11111111111)
    if (/^(\d)\1+$/.test(cpf)) return false;

    let sum = 0;
    let remainder;

    // 🔸 CÁLCULO DO PRIMEIRO DÍGITO VERIFICADOR
    for (let i = 1; i <= 9; i++) {
      // Multiplica cada número por um peso decrescente (10 até 2)
      sum += parseInt(cpf.substring(i - 1, i)) * (11 - i);
    }

    // Aplica a regra do CPF
    remainder = (sum * 10) % 11;

    // Se der 10 ou 11, vira 0
    if (remainder === 10 || remainder === 11) remainder = 0;

    // Verifica se o dígito calculado bate com o original
    if (remainder !== parseInt(cpf.substring(9, 10))) return false;

    // 🔸 CÁLCULO DO SEGUNDO DÍGITO VERIFICADOR
    sum = 0;

    for (let i = 1; i <= 10; i++) {
      // Agora usa 10 números e pesos de 11 até 2
      sum += parseInt(cpf.substring(i - 1, i)) * (12 - i);
    }

    // Mesma lógica de cálculo
    remainder = (sum * 10) % 11;

    // Ajuste padrão
    if (remainder === 10 || remainder === 11) remainder = 0;

    // Retorna true se o último dígito estiver correto
    return remainder === parseInt(cpf.substring(10, 11));
  }
}