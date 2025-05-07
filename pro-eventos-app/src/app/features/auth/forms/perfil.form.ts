import { Validators } from "@angular/forms";

export const PerfilForm = {
  titulo: ['', [Validators.required]],
  primeiroNome: ['', [Validators.required]],
  ultimoNome: ['', [Validators.required]],
  email: ['', [Validators.required, Validators.email]],
  telefone: ['', [Validators.required]],
  funcao: ['', [Validators.required]],
  descricao: ['', [Validators.required]],
  senha: ['', [Validators.required, Validators.minLength(6)]],
  confirmeSenha: ['', [Validators.required, Validators.minLength(6)]]
}