import { Validators } from "@angular/forms";

export const RegistrationForm = {
  primeiroNome: ['', Validators.required],
  ultimoNome: ['', Validators.required],
  email: ['', [Validators.required, Validators.email]],
  nomeUsuario: ['', Validators.required],
  senha: ['', [Validators.required, Validators.minLength(6)]],
  confirmeSenha: ['', [Validators.required, Validators.minLength(6)]]
}