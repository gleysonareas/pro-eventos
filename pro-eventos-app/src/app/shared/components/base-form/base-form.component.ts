import { Directive, inject, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";

@Directive()
export abstract class BaseFormComponent implements OnInit {

  constructor() {

  }

  ngOnInit(): void {
  }

}