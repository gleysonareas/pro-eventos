import { Directive, OnInit } from "@angular/core";

@Directive()
export abstract class BaseListComponent implements OnInit {

  constructor() {

  }

  ngOnInit(): void {
  }
}