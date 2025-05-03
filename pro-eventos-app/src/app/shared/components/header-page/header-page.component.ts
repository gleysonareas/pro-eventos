import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from "@angular/router";


@Component({
  selector: 'pe-header-page',
  templateUrl: './header-page.component.html',
  styleUrls: ['./header-page.component.scss']
})
export class HeaderPageComponent implements OnInit {

  @Input() title: string = '';
  @Input() subtitle: string = 'Desde 2022';
  @Input() iconClass: string = 'fa fa-user';
  @Input() showButton: boolean = true;


  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public listar(): void {
    this.router.navigate([`/${this.title.toLowerCase()}/lista`]);
  }

}
