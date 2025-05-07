import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { EventoForm } from "../../forms/evento.form";

@Component({
  selector: 'pe-evento-detalhe',
  templateUrl: './evento-detalhe.component.html',
  styleUrls: ['./evento-detalhe.component.scss']
})
export class EventoDetalheComponent implements OnInit {

  public eventoForm!: FormGroup

  get form(): any {
    return this.eventoForm.controls;
  }

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.validatorForm()
  }

  validatorForm() {
    this.eventoForm = this.formBuilder.group(EventoForm)
  }

  resetForm() {
    this.eventoForm.reset()
  }

}
