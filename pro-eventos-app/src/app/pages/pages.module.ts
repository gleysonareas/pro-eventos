import { NgModule } from '@angular/core';
import { Eventos } from './eventos/eventos';
import { Palestrantes } from './palestrantes/palestrantes';
import { ComponentsModule } from 'src/shared/components/components.module';

@NgModule({
  declarations: [
    Eventos, 
    Palestrantes
  ],
  imports: [
    ComponentsModule
  ],
  exports: [
    Eventos, 
    Palestrantes,
  ]
})
export class PagesModule { }
