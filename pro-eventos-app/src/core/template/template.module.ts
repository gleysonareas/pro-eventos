import { NgModule } from '@angular/core';
import { NavComponent } from './nav/nav.component';
import { SharedModule } from "../../shared/shared.module";
import { PagesModule } from "../../app/pages/pages.module";

@NgModule({
  declarations: [NavComponent],
  imports: [
    SharedModule,
    PagesModule,
  ],
  exports: [
    NavComponent,
    SharedModule,
    PagesModule,
  ]
})
export class TemplateModule { }
