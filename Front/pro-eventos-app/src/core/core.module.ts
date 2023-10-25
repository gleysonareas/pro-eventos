import { NgModule } from '@angular/core';
import { AuthModule } from './auth/auth.module';
import { TemplateModule } from "./template/template.module";



@NgModule({
  declarations: [],
  imports: [
    AuthModule,
    TemplateModule
  ],
  exports: [
    TemplateModule,
  ]
})
export class CoreModule { }
