import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { CollapseModule } from "ngx-bootstrap/collapse";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { ModalModule } from 'ngx-bootstrap/modal';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from "ngx-spinner";

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { ptBrLocale } from 'ngx-bootstrap/locale';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavComponent } from "./components/template/nav/nav.component";

import { DatetimeFormatPipe } from "./shared/helpers/datetime-format.pipe";

import { Eventos } from "./features/eventos/views/eventos/eventos";
import { Palestrantes } from "./features/palestrantes/views/palestrantes/palestrantes";
import { HeaderPageComponent } from './shared/components/header-page/header-page.component';
import { ContatosComponent } from './features/contatos/views/contatos/contatos.component';
import { PerfilComponent } from './features/auth/views/perfil/perfil.component';
import { DashboardComponent } from './features/dashboard/views/dashboard/dashboard.component';
import { EventoDetalheComponent } from './features/eventos/components/evento-detalhe/evento-detalhe.component';
import { EventoListaComponent } from './features/eventos/components/evento-lista/evento-lista.component';
import { UserComponent } from './features/auth/views/user/user.component';
import { LoginComponent } from './features/auth/components/login/login.component';
import { RegistrationComponent } from './features/auth/components/registration/registration.component';

defineLocale('pt-br', ptBrLocale);

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    Eventos,
    Palestrantes,
    DatetimeFormatPipe,
    HeaderPageComponent,
    ContatosComponent,
    PerfilComponent,
    DashboardComponent,
    EventoDetalheComponent,
    EventoListaComponent,
    UserComponent,
    LoginComponent,
    RegistrationComponent,
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxSpinnerModule,
    RouterModule,
    BsDatepickerModule.forRoot(),
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
      progressBar: true,
      progressAnimation: 'increasing',
    }),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
