import { Validators } from "@angular/forms";

export const EventoForm = {
  local: ['', [Validators.required]],
  dataEvento: ['', [Validators.required]],
  tema: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
  qtdPessoas: ['', [Validators.required, Validators.max(120000)]],
  // lote: ['', [Validators.required]],
  imageUrl: ['', [Validators.required]],
  telefone: ['', [Validators.required]],
  email: ['', [Validators.required, Validators.email]],
}