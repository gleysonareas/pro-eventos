import { Component, OnInit } from '@angular/core';
import { AbstractControl, AbstractControlOptions, FormBuilder, FormGroup } from "@angular/forms";
import { PerfilForm } from "../../forms/perfil.form";
import { ValildatorField } from "src/app/shared/helpers/validator-field";

@Component({
  selector: 'pe-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  public perfilForm!: FormGroup

  get form(): any {
    return this.perfilForm.controls
  }

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.validationForm()
  }

  validationForm() {
    const formOptions: AbstractControlOptions = {
      validators: ValildatorField.mustMatch('senha', 'confirmeSenha')
    }

    this.perfilForm = this.formBuilder.group(PerfilForm, formOptions)
  }

  resetForm() {
    this.perfilForm.reset()
  }

}
