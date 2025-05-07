import { Component, OnInit } from '@angular/core';
import { AbstractControl, AbstractControlOptions, FormBuilder, FormGroup } from "@angular/forms";
import { RegistrationForm } from "../../forms/registration.form";
import { ValildatorField } from "src/app/shared/helpers/validator-field";

@Component({
  selector: 'pe-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  public registrationForm!: FormGroup

  get form(): any {
    return this.registrationForm.controls
  }

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.validationForm();
  }

  validationForm() {
    const formOptions: AbstractControlOptions = {
      validators: ValildatorField.mustMatch('senha', 'confirmeSenha')
    }

    this.registrationForm = this.formBuilder.group(RegistrationForm, formOptions);
  }

  resetForm() {
    this.registrationForm.reset()
  }

}
