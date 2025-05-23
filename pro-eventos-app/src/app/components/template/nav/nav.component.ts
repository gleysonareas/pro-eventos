import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'pe-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  isCollapsed = true;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  showMenu(): boolean {
    if (this.router.url === '/usuario/login' ||
      this.router.url === '/usuario/registrar')
      return false;
    return true;
  }
}
